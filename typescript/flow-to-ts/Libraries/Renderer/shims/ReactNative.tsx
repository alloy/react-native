'use strict';;
import _Import0 from '../implementations/ReactNativeRenderer-dev';
import _Import1 from '../implementations/ReactNativeRenderer-prod';












import { ReactNativeType } from "./ReactNativeTypes";

let ReactNative;

if (__DEV__) {
  ReactNative = _Import0;
} else {
  ReactNative = _Import1;
}

export default ReactNative as ReactNativeType;;
