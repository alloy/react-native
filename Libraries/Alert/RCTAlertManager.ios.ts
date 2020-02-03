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