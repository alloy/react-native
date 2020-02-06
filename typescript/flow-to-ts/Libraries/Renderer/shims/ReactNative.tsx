'use strict';;
import { ReactNativeType } from "./ReactNativeTypes";

let ReactNative;

if (__DEV__) {
  ReactNative = require('../implementations/ReactNativeRenderer-dev');
} else {
  ReactNative = require('../implementations/ReactNativeRenderer-prod');
}

export default ReactNative as ReactNativeType;
