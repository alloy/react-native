'use strict';;
import { ReactNativeViewConfigRegistry } from "react-native/Libraries/ReactPrivate/ReactNativePrivateInterface";

import { ViewConfigGetter } from "./ReactNativeTypes";

const {
  register
} = ReactNativeViewConfigRegistry;

/**
 * Creates a renderable ReactNative host component.
 * Use this method for view configs that are loaded from UIManager.
 * Use createReactNativeComponentClass() for view configs defined within JavaScript.
 *
 * @param {string} config iOS View configuration.
 * @private
 */
const createReactNativeComponentClass = function (name: string, callback: ViewConfigGetter): string {
  return register(name, callback);
};

export default createReactNativeComponentClass;
