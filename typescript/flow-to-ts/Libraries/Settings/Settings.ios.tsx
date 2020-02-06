'use strict';;
const RCTDeviceEventEmitter = require('../EventEmitter/RCTDeviceEventEmitter');

const invariant = require('invariant');

import NativeSettingsManager from "./NativeSettingsManager";

const subscriptions: Array<{
  keys: Array<string>;
  callback: Function | null | undefined;

}> = [];

const Settings = {
  _settings: (NativeSettingsManager && NativeSettingsManager.getConstants().settings as any),

  get(key: string): unknown {
    return this._settings[key];
  },

  set(settings: Object) {
    this._settings = Object.assign(this._settings, settings);
    NativeSettingsManager.setValues(settings);
  },

  watchKeys(keys: string | Array<string>, callback: Function): number {
    if (typeof keys === 'string') {
      keys = [keys];
    }

    invariant(Array.isArray(keys), 'keys should be a string or array of strings');

    const sid = subscriptions.length;
    subscriptions.push({ keys: keys, callback: callback });
    return sid;
  },

  clearWatch(watchId: number) {
    if (watchId < subscriptions.length) {
      subscriptions[watchId] = { keys: [], callback: null };
    }
  },

  _sendObservations(body: Object) {
    Object.keys(body).forEach(key => {
      const newValue = body[key];
      const didChange = this._settings[key] !== newValue;
      this._settings[key] = newValue;

      if (didChange) {
        subscriptions.forEach(sub => {
          if (sub.keys.indexOf(key) !== -1 && sub.callback) {
            sub.callback();
          }
        });
      }
    });
  }
};

RCTDeviceEventEmitter.addListener('settingsUpdated', Settings._sendObservations.bind(Settings));

export default Settings;
