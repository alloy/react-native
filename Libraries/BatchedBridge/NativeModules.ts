'use strict';












const BatchedBridge = require('./BatchedBridge');

const invariant = require('invariant');

import { ExtendedError } from "../Core/Devtools/parseErrorStack";

export type ModuleConfig = [string
/* name */
, Object | null | undefined
/* constants */
, ReadonlyArray<string> | null | undefined
/* functions */
, ReadonlyArray<number> | null | undefined
/* promise method IDs */
, ReadonlyArray<number> | null | undefined
/* sync method IDs */
];

export type MethodType = "async" | "promise" | "sync";

function genModule(config: ModuleConfig | null | undefined, moduleID: number): {
  name: string;
  module?: Object;

} | null | undefined {
  if (!config) {
    return null;
  }

  const [moduleName, constants, methods, promiseMethods, syncMethods] = config;
  invariant(!moduleName.startsWith('RCT') && !moduleName.startsWith('RK'), "Module name prefixes should've been stripped by the native side " + "but wasn't for " + moduleName);

  if (!constants && !methods) {
    // Module contents will be filled in lazily later
    return { name: moduleName };
  }

  const module = {};
  methods && methods.forEach((methodName, methodID) => {
    const isPromise = promiseMethods && arrayContains(promiseMethods, methodID);
    const isSync = syncMethods && arrayContains(syncMethods, methodID);
    invariant(!isPromise || !isSync, 'Cannot have a method that is both async and a sync hook');
    const methodType = isPromise ? 'promise' : isSync ? 'sync' : 'async';
    module[methodName] = genMethod(moduleID, methodID, methodType);
  });

  Object.assign(module, constants);

  if (module.getConstants == null) {
    module.getConstants = () => constants || Object.freeze({});
  } else {
    console.warn(`Unable to define method 'getConstants()' on NativeModule '${moduleName}'. NativeModule '${moduleName}' already has a constant or method called 'getConstants'. Please remove it.`);
  }

  if (__DEV__) {
    BatchedBridge.createDebugLookup(moduleID, moduleName, methods);
  }

  return { name: moduleName, module };
}

// export this method as a global so we can call it from native
global.__fbGenNativeModule = genModule;

function loadModule(name: string, moduleID: number): Object | null | undefined {
  invariant(global.nativeRequireModuleConfig, "Can't lazily create module without nativeRequireModuleConfig");
  const config = global.nativeRequireModuleConfig(name);
  const info = genModule(config, moduleID);
  return info && info.module;
}

function genMethod(moduleID: number, methodID: number, type: MethodType) {
  let fn = null;
  if (type === 'promise') {
    fn = function promiseMethodWrapper(...args: Array<any>) {
      // In case we reject, capture a useful stack trace here.
      const enqueueingFrameError: ExtendedError = new Error();
      return new Promise((resolve, reject) => {
        BatchedBridge.enqueueNativeCall(moduleID, methodID, args, data => resolve(data), errorData => reject(updateErrorWithErrorData(errorData, enqueueingFrameError)));
      });
    };
  } else {
    fn = function nonPromiseMethodWrapper(...args: Array<any>) {
      const lastArg = args.length > 0 ? args[args.length - 1] : null;
      const secondLastArg = args.length > 1 ? args[args.length - 2] : null;
      const hasSuccessCallback = typeof lastArg === 'function';
      const hasErrorCallback = typeof secondLastArg === 'function';
      hasErrorCallback && invariant(hasSuccessCallback, 'Cannot have a non-function arg after a function arg.');
      const onSuccess = hasSuccessCallback ? lastArg : null;
      const onFail = hasErrorCallback ? secondLastArg : null;
      const callbackCount = hasSuccessCallback + hasErrorCallback;
      args = args.slice(0, args.length - callbackCount);
      if (type === 'sync') {
        return BatchedBridge.callNativeSyncHook(moduleID, methodID, args, onFail, onSuccess);
      } else {
        BatchedBridge.enqueueNativeCall(moduleID, methodID, args, onFail, onSuccess);
      }
    };
  }
  fn.type = type;
  return fn;
}

function arrayContains<T>(array: ReadonlyArray<T>, value: T): boolean {
  return array.indexOf(value) !== -1;
}

function updateErrorWithErrorData(errorData: {message: string;}, error: ExtendedError): ExtendedError {
  return Object.assign(error, errorData || {});
}

let NativeModules: {
  [moduleName: string]: Object;
} = {};
if (global.nativeModuleProxy) {
  NativeModules = global.nativeModuleProxy;
} else if (!global.nativeExtensions) {
  const bridgeConfig = global.__fbBatchedBridgeConfig;
  invariant(bridgeConfig, '__fbBatchedBridgeConfig is not set, cannot invoke native modules');

  const defineLazyObjectProperty = require('../Utilities/defineLazyObjectProperty');
  (bridgeConfig.remoteModuleConfig || []).forEach((config: ModuleConfig, moduleID: number) => {
    // Initially this config will only contain the module name when running in JSC. The actual
    // configuration of the module will be lazily loaded.
    const info = genModule(config, moduleID);
    if (!info) {
      return;
    }

    if (info.module) {
      NativeModules[info.name] = info.module;
    } // If there's no module config, define a lazy getter
    else {
        defineLazyObjectProperty(NativeModules, info.name, {
          get: () => loadModule(info.name, moduleID)
        });
      }
  });
}

module.exports = NativeModules;