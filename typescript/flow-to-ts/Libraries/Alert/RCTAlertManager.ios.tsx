yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Alert/RCTAlertManager.ios.js
'use strict';












import NativeAlertManager from "./NativeAlertManager";
import { Args } from "./NativeAlertManager";

module.exports = {
  alertWithArgs(args: Args, callback: (id: number, value: string) => void): void {
    if (NativeAlertManager == null) {
      return;
    }
    NativeAlertManager.alertWithArgs(args, callback);
  }
};
Done in 0.46s.
