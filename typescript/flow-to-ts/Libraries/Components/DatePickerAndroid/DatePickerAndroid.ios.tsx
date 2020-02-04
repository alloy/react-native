yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/DatePickerAndroid/DatePickerAndroid.ios.js
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
Done in 0.47s.
