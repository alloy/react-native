'use strict';












import processColor from "../StyleSheet/processColor";
import NativeDevLoadingView from "./NativeDevLoadingView";

export default {
  showMessage(message: string, type: "load" | "refresh") {
    if (NativeDevLoadingView) {
      NativeDevLoadingView.showMessage(message, // Use same colors as iOS "Personal Hotspot" bar.
      processColor('#ffffff'), type && type === 'load' ? processColor('#275714') : processColor('#2584e8'));
    }
  },
  hide() {
    NativeDevLoadingView && NativeDevLoadingView.hide();
  }
};;
