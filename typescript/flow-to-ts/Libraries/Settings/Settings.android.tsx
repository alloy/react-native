'use strict';












const Settings = {
  get(key: string): unknown {
    console.warn('Settings is not yet supported on Android');
    return null;
  },

  set(settings: any) {
    console.warn('Settings is not yet supported on Android');
  },

  watchKeys(keys: string | Array<string>, callback: ((...args: any) => any)): number {
    console.warn('Settings is not yet supported on Android');
    return -1;
  },

  clearWatch(watchId: number) {
    console.warn('Settings is not yet supported on Android');
  }
};

export default Settings;;
