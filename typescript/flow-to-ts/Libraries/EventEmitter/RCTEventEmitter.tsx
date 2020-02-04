yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/EventEmitter/RCTEventEmitter.js
'use strict';












const BatchedBridge = require('../BatchedBridge/BatchedBridge');

const RCTEventEmitter = {
  register(eventEmitter: any) {
    BatchedBridge.registerCallableModule('RCTEventEmitter', eventEmitter);
  }
};

module.exports = RCTEventEmitter;
Done in 0.53s.
