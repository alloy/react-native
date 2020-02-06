'use strict';;
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

export default ReactFabric as ReactNativeType;
