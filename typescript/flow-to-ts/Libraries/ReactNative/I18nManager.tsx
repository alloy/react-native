yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/ReactNative/I18nManager.js
'use strict';












import NativeI18nManager from "./NativeI18nManager";

const i18nConstants: {
  doLeftAndRightSwapInRTL: boolean;
  isRTL: boolean;
} = NativeI18nManager ? NativeI18nManager.getConstants() : {
  isRTL: false,
  doLeftAndRightSwapInRTL: true
};

module.exports = {
  getConstants: (): {doLeftAndRightSwapInRTL: boolean;isRTL: boolean;} => {
    return i18nConstants;
  },

  allowRTL: (shouldAllow: boolean) => {
    if (!NativeI18nManager) {
      return;
    }

    NativeI18nManager.allowRTL(shouldAllow);
  },

  forceRTL: (shouldForce: boolean) => {
    if (!NativeI18nManager) {
      return;
    }

    NativeI18nManager.forceRTL(shouldForce);
  },

  swapLeftAndRightInRTL: (flipStyles: boolean) => {
    if (!NativeI18nManager) {
      return;
    }

    NativeI18nManager.swapLeftAndRightInRTL(flipStyles);
  },

  isRTL: i18nConstants.isRTL,
  doLeftAndRightSwapInRTL: i18nConstants.doLeftAndRightSwapInRTL
};
Done in 0.48s.
