'use strict';;
import NativeSoundManager from "./NativeSoundManager";

const SoundManager = {
  playTouchSound: function (): void {
    if (NativeSoundManager) {
      NativeSoundManager.playTouchSound();
    }
  }
};

export default SoundManager;
