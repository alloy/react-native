yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/LoadingView.android.js
'use strict';












import ToastAndroid from "../Components/ToastAndroid/ToastAndroid";

const TOAST_SHORT_DELAY = 2000;
let isVisible = false;

module.exports = {
  showMessage(message: string, type: "load" | "refresh") {
    if (!isVisible) {
      ToastAndroid.show(message, ToastAndroid.SHORT);
      isVisible = true;
      setTimeout(() => {
        isVisible = false;
      }, TOAST_SHORT_DELAY);
    }
  },
  hide() {}
};
Done in 0.46s.
