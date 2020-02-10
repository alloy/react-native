import { ViewConfigGetter } from "./ReactNativeTypes";
/**
 * Creates a renderable ReactNative host component.
 * Use this method for view configs that are loaded from UIManager.
 * Use createReactNativeComponentClass() for view configs defined within JavaScript.
 *
 * @param {string} config iOS View configuration.
 * @private
 */
declare const createReactNativeComponentClass: (name: string, callback: ViewConfigGetter) => string;
export default createReactNativeComponentClass;
