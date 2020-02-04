yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/EventEmitter/RCTNativeAppEventEmitter.js
'use strict';












const RCTDeviceEventEmitter = require('./RCTDeviceEventEmitter');

/**
 * Deprecated - subclass NativeEventEmitter to create granular event modules instead of
 * adding all event listeners directly to RCTNativeAppEventEmitter.
 */
const RCTNativeAppEventEmitter = RCTDeviceEventEmitter;
module.exports = RCTNativeAppEventEmitter;
Done in 0.50s.
