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