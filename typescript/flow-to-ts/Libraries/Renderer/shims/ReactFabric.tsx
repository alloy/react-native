yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Renderer/shims/ReactFabric.js
'use strict';












import { BatchedBridge } from "react-native/Libraries/ReactPrivate/ReactNativePrivateInterface";

// TODO @sema: Adjust types
import { ReactNativeType } from "./ReactNativeTypes";

let ReactFabric;

if (__DEV__) {
  ReactFabric = require('../implementations/ReactFabric-dev');
} else {
  ReactFabric = require('../implementations/ReactFabric-prod');
}

BatchedBridge.registerCallableModule('ReactFabric', ReactFabric);

module.exports = (ReactFabric as ReactNativeType);
Done in 0.51s.
