'use strict';












const BatchedBridge = require('../BatchedBridge/BatchedBridge');

const RCTEventEmitter = {
  register(eventEmitter: any) {
    BatchedBridge.registerCallableModule('RCTEventEmitter', eventEmitter);
  }
};

module.exports = RCTEventEmitter;