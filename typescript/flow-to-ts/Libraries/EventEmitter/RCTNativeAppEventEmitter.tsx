'use strict';;
import RCTDeviceEventEmitter from './RCTDeviceEventEmitter';

/**
 * Deprecated - subclass NativeEventEmitter to create granular event modules instead of
 * adding all event listeners directly to RCTNativeAppEventEmitter.
 */
const RCTNativeAppEventEmitter = RCTDeviceEventEmitter;
export default RCTNativeAppEventEmitter;
