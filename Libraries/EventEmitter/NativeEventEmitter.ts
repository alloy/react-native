'use strict';












const EventEmitter = require('../vendor/emitter/EventEmitter');
const Platform = require('../Utilities/Platform');
const RCTDeviceEventEmitter = require('./RCTDeviceEventEmitter');

const invariant = require('invariant');

import EmitterSubscription from "../vendor/emitter/EmitterSubscription";

type NativeModule = {
  readonly addListener: (eventType: string) => void;
  readonly removeListeners: (count: number) => void;

};

/**
 * Abstract base class for implementing event-emitting modules. This implements
 * a subset of the standard EventEmitter node module API.
 */
class NativeEventEmitter extends EventEmitter {

  _nativeModule: NativeModule | null | undefined;

  constructor(nativeModule: NativeModule | null | undefined) {
    super(RCTDeviceEventEmitter.sharedSubscriber);
    if (Platform.OS === 'ios') {
      invariant(nativeModule, 'Native module cannot be null.');
      this._nativeModule = nativeModule;
    }
  }

  addListener(eventType: string, listener: Function, context: Object | null | undefined): EmitterSubscription {
    if (this._nativeModule != null) {
      this._nativeModule.addListener(eventType);
    }
    return super.addListener(eventType, listener, context);
  }

  removeAllListeners(eventType: string) {
    invariant(eventType, 'eventType argument is required.');
    const count = this.listeners(eventType).length;
    if (this._nativeModule != null) {
      this._nativeModule.removeListeners(count);
    }
    super.removeAllListeners(eventType);
  }

  removeSubscription(subscription: EmitterSubscription) {
    if (this._nativeModule != null) {
      this._nativeModule.removeListeners(1);
    }
    super.removeSubscription(subscription);
  }
}

module.exports = NativeEventEmitter;