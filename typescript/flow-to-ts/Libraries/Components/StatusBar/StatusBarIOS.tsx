'use strict';;
const NativeEventEmitter = require('../../EventEmitter/NativeEventEmitter');

import NativeStatusBarManagerIOS from "./NativeStatusBarManagerIOS";

/**
 * Use `StatusBar` for mutating the status bar.
 */
class StatusBarIOS extends NativeEventEmitter {}

export default new StatusBarIOS(NativeStatusBarManagerIOS) as StatusBarIOS;
