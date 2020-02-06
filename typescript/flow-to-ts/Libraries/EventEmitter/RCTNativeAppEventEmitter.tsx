'use strict';;
const RCTDeviceEventEmitter = require('./RCTDeviceEventEmitter');

/**
 * Deprecated - subclass NativeEventEmitter to create granular event modules instead of
 * adding all event listeners directly to RCTNativeAppEventEmitter.
 */
const RCTNativeAppEventEmitter = RCTDeviceEventEmitter;
export default RCTNativeAppEventEmitter;
