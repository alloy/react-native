'use strict';












import { Options, DatePickerOpenAction } from "./DatePickerAndroidTypes";

class DatePickerAndroid {

  static async open(options: Options | null | undefined): Promise<DatePickerOpenAction> {
    throw new Error('DatePickerAndroid is not supported on this platform.');
  }

  /**
   * A date has been selected.
   */
  static +dateSetAction: "dateSetAction" = 'dateSetAction';

  /**
   * The dialog has been dismissed.
   */
  static +dismissedAction: "dismissedAction" = 'dismissedAction';
}

module.exports = DatePickerAndroid;