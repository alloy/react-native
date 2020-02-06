'use strict';;
import invariant from 'invariant';
import { $ReadOnly } from "utility-types";














import { ReactNativeBaseComponentViewConfig, ViewConfigGetter } from "./ReactNativeTypes";

// Event configs
const customBubblingEventTypes: {
  [eventName: string]: $ReadOnly<{
    phasedRegistrationNames: $ReadOnly<{
      captured: string;
      bubbled: string;
    }>;
  }>;
} = {};
const customDirectEventTypes: {
  [eventName: string]: $ReadOnly<{
    registrationName: string;
  }>;
} = {};

export { customBubblingEventTypes, customDirectEventTypes };

const viewConfigCallbacks = new Map();
const viewConfigs = new Map();

function processEventTypes(viewConfig: ReactNativeBaseComponentViewConfig<>): void {
  const {
    bubblingEventTypes,
    directEventTypes
  } = viewConfig;

  if (__DEV__) {
    if (bubblingEventTypes != null && directEventTypes != null) {
      for (const topLevelType in directEventTypes) {
        invariant(bubblingEventTypes[topLevelType] == null, 'Event cannot be both direct and bubbling: %s', topLevelType);
      }
    }
  }

  if (bubblingEventTypes != null) {
    for (const topLevelType in bubblingEventTypes) {
      if (customBubblingEventTypes[topLevelType] == null) {
        customBubblingEventTypes[topLevelType] = bubblingEventTypes[topLevelType];
      }
    }
  }

  if (directEventTypes != null) {
    for (const topLevelType in directEventTypes) {
      if (customDirectEventTypes[topLevelType] == null) {
        customDirectEventTypes[topLevelType] = directEventTypes[topLevelType];
      }
    }
  }
}

/**
 * Registers a native view/component by name.
 * A callback is provided to load the view config from UIManager.
 * The callback is deferred until the view is actually rendered.
 */
export const register = function (name: string, callback: ViewConfigGetter): string {
  invariant(!viewConfigCallbacks.has(name), 'Tried to register two views with the same name %s', name);
  invariant(typeof callback === 'function', 'View config getter callback for component `%s` must be a function (received `%s`)', name, callback === null ? 'null' : typeof callback);
  viewConfigCallbacks.set(name, callback);
  return name;
};

/**
 * Retrieves a config for the specified view.
 * If this is the first time the view has been used,
 * This configuration will be lazy-loaded from UIManager.
 */
export const get = function (name: string): ReactNativeBaseComponentViewConfig<> {
  let viewConfig;
  if (!viewConfigs.has(name)) {
    const callback = viewConfigCallbacks.get(name);
    if (typeof callback !== 'function') {
      invariant(false, 'View config getter callback for component `%s` must be a function (received `%s`).%s', name, callback === null ? 'null' : typeof callback, typeof name[0] === 'string' && /[a-z]/.test(name[0]) ? ' Make sure to start component names with a capital letter.' : '');
    }
    viewConfig = callback();
    processEventTypes(viewConfig);
    viewConfigs.set(name, viewConfig);

    // Clear the callback after the config is set so that
    // we don't mask any errors during registration.
    viewConfigCallbacks.set(name, null);
  } else {
    viewConfig = viewConfigs.get(name);
  }
  invariant(viewConfig, 'View config not found for name %s', name);
  return viewConfig;
};
