'use strict';












import { ReactNativeType } from "./ReactNativeTypes";

let ReactNative;

if (__DEV__) {
  ReactNative = require('../implementations/ReactNativeRenderer-dev');
} else {
  ReactNative = require('../implementations/ReactNativeRenderer-prod');
}

module.exports = (ReactNative as ReactNativeType);
