'use strict';;
import warning from 'fbjs/lib/warning';

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

export default ToastAndroid;
