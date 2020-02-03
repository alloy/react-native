/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */
'use strict';

const Platform = require('../../Utilities/Platform');

const NativeEventEmitter = require('../../EventEmitter/NativeEventEmitter');

import NativeTVNavigationEventEmitter from './NativeTVNavigationEventEmitter';
import EmitterSubscription from '../../vendor/emitter/EmitterSubscription';

class TVEventHandler {
  __nativeTVNavigationEventListener: EmitterSubscription | undefined | null = null;
  __nativeTVNavigationEventEmitter: NativeEventEmitter | undefined | null = null;

  enable(component: any | undefined | null, callback: Function): void {
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