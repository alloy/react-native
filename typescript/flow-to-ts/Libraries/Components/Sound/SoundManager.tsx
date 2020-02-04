yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/Sound/SoundManager.js
'use strict';











import NativeSoundManager from "./NativeSoundManager";

const SoundManager = {
  playTouchSound: function (): void {
    if (NativeSoundManager) {
      NativeSoundManager.playTouchSound();
    }
  }
};

module.exports = SoundManager;
Done in 0.57s.
