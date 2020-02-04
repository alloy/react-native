yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Alert/RCTAlertManager.android.js
'use strict';











import NativeDialogManagerAndroid from "../NativeModules/specs/NativeDialogManagerAndroid";

function emptyCallback() {}

module.exports = {
  alertWithArgs: function (args, callback) {
    // TODO(5998984): Polyfill it correctly with DialogManagerAndroid
    if (!NativeDialogManagerAndroid) {
      return;
    }

    NativeDialogManagerAndroid.showAlert(args, emptyCallback, callback || emptyCallback);
  }
};
Done in 0.46s.
