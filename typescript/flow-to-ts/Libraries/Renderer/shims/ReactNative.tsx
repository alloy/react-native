yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Renderer/shims/ReactNative.js
'use strict';












import { ReactNativeType } from "./ReactNativeTypes";

let ReactNative;

if (__DEV__) {
  ReactNative = require('../implementations/ReactNativeRenderer-dev');
} else {
  ReactNative = require('../implementations/ReactNativeRenderer-prod');
}

module.exports = (ReactNative as ReactNativeType);
Done in 0.48s.
