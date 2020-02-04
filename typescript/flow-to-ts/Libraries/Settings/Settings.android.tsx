yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Settings/Settings.android.js
'use strict';












const Settings = {
  get(key: string): unknown {
    console.warn('Settings is not yet supported on Android');
    return null;
  },

  set(settings: Object) {
    console.warn('Settings is not yet supported on Android');
  },

  watchKeys(keys: string | Array<string>, callback: Function): number {
    console.warn('Settings is not yet supported on Android');
    return -1;
  },

  clearWatch(watchId: number) {
    console.warn('Settings is not yet supported on Android');
  }
};

module.exports = Settings;
Done in 0.50s.
