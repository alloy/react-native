yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/LoadingView.ios.js
'use strict';












import processColor from "../StyleSheet/processColor";
import NativeDevLoadingView from "./NativeDevLoadingView";

module.exports = {
  showMessage(message: string, type: "load" | "refresh") {
    if (NativeDevLoadingView) {
      NativeDevLoadingView.showMessage(message, // Use same colors as iOS "Personal Hotspot" bar.
      processColor('#ffffff'), type && type === 'load' ? processColor('#275714') : processColor('#2584e8'));
    }
  },
  hide() {
    NativeDevLoadingView && NativeDevLoadingView.hide();
  }
};
Done in 0.47s.
