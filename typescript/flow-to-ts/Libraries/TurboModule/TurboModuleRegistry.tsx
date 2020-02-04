yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/TurboModule/TurboModuleRegistry.js
'use strict';












const NativeModules = require('../BatchedBridge/NativeModules');
import { TurboModule } from "./RCTExport";
import invariant from "invariant";

const turboModuleProxy = global.__turboModuleProxy;

export function get<T extends TurboModule>(name: string): T | null | undefined {
  // Bridgeless mode requires TurboModules
  if (!global.RN$Bridgeless) {
    // Backward compatibility layer during migration.
    const legacyModule = NativeModules[name];
    if (legacyModule != null) {
      return ((legacyModule as any) as T);
    }
  }

  if (turboModuleProxy != null) {
    const module: T | null | undefined = turboModuleProxy(name);
    return module;
  }

  return null;
}

export function getEnforcing<T extends TurboModule>(name: string): T {
  const module = get(name);
  invariant(module != null, `TurboModuleRegistry.getEnforcing(...): '${name}' could not be found. ` + 'Verify that a module by this name is registered in the native binary.');
  return module;
}
Done in 0.52s.
