yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/StatusBar/StatusBarIOS.js
'use strict';












const NativeEventEmitter = require('../../EventEmitter/NativeEventEmitter');

import NativeStatusBarManagerIOS from "./NativeStatusBarManagerIOS";

/**
 * Use `StatusBar` for mutating the status bar.
 */
class StatusBarIOS extends NativeEventEmitter {}

module.exports = (new StatusBarIOS(NativeStatusBarManagerIOS) as StatusBarIOS);
Done in 0.71s.
