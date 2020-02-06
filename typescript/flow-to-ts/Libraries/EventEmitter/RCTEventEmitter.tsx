'use strict';;
import BatchedBridge from '../BatchedBridge/BatchedBridge';

const RCTEventEmitter = {
  register(eventEmitter: any) {
    BatchedBridge.registerCallableModule('RCTEventEmitter', eventEmitter);
  }
};

export default RCTEventEmitter;
