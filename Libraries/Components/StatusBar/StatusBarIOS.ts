'use strict';












const NativeEventEmitter = require('../../EventEmitter/NativeEventEmitter');

import NativeStatusBarManagerIOS from "./NativeStatusBarManagerIOS";

/**
 * Use `StatusBar` for mutating the status bar.
 */
class StatusBarIOS extends NativeEventEmitter {}

module.exports = (new StatusBarIOS(NativeStatusBarManagerIOS) as StatusBarIOS);