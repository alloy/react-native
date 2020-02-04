yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/ToastAndroid/ToastAndroid.ios.js
'use strict';












const warning = require('fbjs/lib/warning');

const ToastAndroid = {
  show: function (message: string, duration: number): void {
    warning(false, 'ToastAndroid is not supported on this platform.');
  },

  showWithGravity: function (message: string, duration: number, gravity: number): void {
    warning(false, 'ToastAndroid is not supported on this platform.');
  },

  showWithGravityAndOffset: function (message: string, duration: number, gravity: number, xOffset: number, yOffset: number): void {
    warning(false, 'ToastAndroid is not supported on this platform.');
  }
};

module.exports = ToastAndroid;
Done in 0.50s.
