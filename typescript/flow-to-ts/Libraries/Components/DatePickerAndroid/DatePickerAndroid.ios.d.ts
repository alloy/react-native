import { Options, DatePickerOpenAction } from "./DatePickerAndroidTypes";
declare class DatePickerAndroid {
    static open(options: Options | null | undefined): Promise<DatePickerOpenAction>;
    /**
     * A date has been selected.
     */
    static readonly dateSetAction: "dateSetAction";
    /**
     * The dialog has been dismissed.
     */
    static readonly dismissedAction: "dismissedAction";
}
export default DatePickerAndroid;
