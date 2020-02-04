yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/JSDevSupportModule.js
'use strict';












import NativeJSDevSupport from "./NativeJSDevSupport";
const ReactNative = require('../Renderer/shims/ReactNative');

const JSDevSupportModule = {
  getJSHierarchy: function (tag: number) {
    if (NativeJSDevSupport) {
      const constants = NativeJSDevSupport.getConstants();
      try {
        const {
          computeComponentStackForErrorReporting
        } = ReactNative.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        const componentStack = computeComponentStackForErrorReporting(tag);
        if (!componentStack) {
          NativeJSDevSupport.onFailure(constants.ERROR_CODE_VIEW_NOT_FOUND, "Component stack doesn't exist for tag " + tag);
        } else {
          NativeJSDevSupport.onSuccess(componentStack);
        }
      } catch (e) {
        NativeJSDevSupport.onFailure(constants.ERROR_CODE_EXCEPTION, e.message);
      }
    }
  }
};

module.exports = JSDevSupportModule;
Done in 0.47s.
