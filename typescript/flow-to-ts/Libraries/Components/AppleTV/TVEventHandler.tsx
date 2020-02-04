yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/AppleTV/TVEventHandler.js
'use strict';












const Platform = require('../../Utilities/Platform');
const NativeEventEmitter = require('../../EventEmitter/NativeEventEmitter');

import NativeTVNavigationEventEmitter from "./NativeTVNavigationEventEmitter";
import EmitterSubscription from "../../vendor/emitter/EmitterSubscription";

class TVEventHandler {

  __nativeTVNavigationEventListener: EmitterSubscription | null | undefined = null;
  __nativeTVNavigationEventEmitter: NativeEventEmitter | null | undefined = null;

  enable(component: any | null | undefined, callback: Function): void {
    if (Platform.OS === 'ios' && !NativeTVNavigationEventEmitter) {
      return;
    }

    this.__nativeTVNavigationEventEmitter = new NativeEventEmitter(NativeTVNavigationEventEmitter);
    this.__nativeTVNavigationEventListener = this.__nativeTVNavigationEventEmitter.addListener('onHWKeyEvent', data => {
      if (callback) {
        callback(component, data);
      }
    });
  }

  disable(): void {
    if (this.__nativeTVNavigationEventListener) {
      this.__nativeTVNavigationEventListener.remove();
      delete this.__nativeTVNavigationEventListener;
    }
    if (this.__nativeTVNavigationEventEmitter) {
      delete this.__nativeTVNavigationEventEmitter;
    }
  }
}

module.exports = TVEventHandler;
Done in 0.51s.
