'use strict';;
import Platform from '../../Utilities/Platform';
import NativeEventEmitter from '../../EventEmitter/NativeEventEmitter';

import NativeTVNavigationEventEmitter from "./NativeTVNavigationEventEmitter";
import EmitterSubscription from "../../vendor/emitter/EmitterSubscription";

class TVEventHandler {

  __nativeTVNavigationEventListener: EmitterSubscription | null | undefined = null;
  __nativeTVNavigationEventEmitter: NativeEventEmitter | null | undefined = null;

  enable(component: any | null | undefined, callback: ((...args: any) => any)): void {
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

export default TVEventHandler;;
