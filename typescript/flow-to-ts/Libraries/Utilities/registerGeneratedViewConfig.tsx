yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/registerGeneratedViewConfig.js
'use strict';
import { $ReadOnly } from "utility-types";












const ReactNativeViewConfigRegistry = require('../Renderer/shims/ReactNativeViewConfigRegistry');
const ReactNativeViewViewConfig = require('../Components/View/ReactNativeViewViewConfig');
import verifyComponentAttributeEquivalence from "./verifyComponentAttributeEquivalence";

export type GeneratedViewConfig = {
  uiViewClassName: string;
  bubblingEventTypes?: $ReadOnly<{
    [eventName: string]: $ReadOnly<{
      phasedRegistrationNames: $ReadOnly<{
        captured: string;
        bubbled: string;
      }>;
    }>;
  }>;
  directEventTypes?: $ReadOnly<{
    [eventName: string]: $ReadOnly<{
      registrationName: string;
    }>;
  }>;
  validAttributes?: {
    [propName: string]: true | $ReadOnly<{
      diff?: <T>(arg1: any, arg2: any) => boolean;
      process?: (arg1: any) => any;
    }>;
  };

};

function registerGeneratedViewConfig(componentName: string, viewConfig: GeneratedViewConfig) {
  const mergedViewConfig = {
    uiViewClassName: componentName,
    Commands: {},
    bubblingEventTypes: {
      ...ReactNativeViewViewConfig.bubblingEventTypes,

      /* $FlowFixMe(>=0.111.0 site=react_native_fb) This comment suppresses an
       * error found when Flow v0.111 was deployed. To see the error, delete
       * this comment and run Flow. */
      ...(viewConfig.bubblingEventTypes || {})
    },
    directEventTypes: {
      ...ReactNativeViewViewConfig.directEventTypes,

      /* $FlowFixMe(>=0.111.0 site=react_native_fb) This comment suppresses an
       * error found when Flow v0.111 was deployed. To see the error, delete
       * this comment and run Flow. */
      ...(viewConfig.directEventTypes || {})
    },
    validAttributes: {
      ...ReactNativeViewViewConfig.validAttributes,

      /* $FlowFixMe(>=0.111.0 site=react_native_fb) This comment suppresses an
       * error found when Flow v0.111 was deployed. To see the error, delete
       * this comment and run Flow. */
      ...(viewConfig.validAttributes || {})
    }
  };

  ReactNativeViewConfigRegistry.register(componentName, () => {
    verifyComponentAttributeEquivalence(componentName, mergedViewConfig);

    return mergedViewConfig;
  });
}

module.exports = registerGeneratedViewConfig;
Done in 0.48s.
