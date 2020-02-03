/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @noflow
 */
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