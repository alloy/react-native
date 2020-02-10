'use strict';;
import _Import0 from '../implementations/ReactFabric-dev';
import _Import1 from '../implementations/ReactFabric-prod';












import { BatchedBridge } from "react-native/Libraries/ReactPrivate/ReactNativePrivateInterface";

// TODO @sema: Adjust types
import { ReactNativeType } from "./ReactNativeTypes";

let ReactFabric;

if (__DEV__) {
  ReactFabric = _Import0;
} else {
  ReactFabric = _Import1;
}

BatchedBridge.registerCallableModule('ReactFabric', ReactFabric);

export default ReactFabric as ReactNativeType;;
