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