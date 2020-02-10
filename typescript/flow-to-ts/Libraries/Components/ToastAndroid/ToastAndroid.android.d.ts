/**
 * This exposes the native ToastAndroid module as a JS module. This has a function 'show'
 * which takes the following parameters:
 *
 * 1. String message: A string with the text to toast
 * 2. int duration: The duration of the toast. May be ToastAndroid.SHORT or ToastAndroid.LONG
 *
 * There is also a function `showWithGravity` to specify the layout gravity. May be
 * ToastAndroid.TOP, ToastAndroid.BOTTOM, ToastAndroid.CENTER.
 *
 * The 'showWithGravityAndOffset' function adds on the ability to specify offset
 * These offset values will translate to pixels.
 *
 * Basic usage:
 * ```javascript
 * ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
 * ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.CENTER);
 * ToastAndroid.showWithGravityAndOffset('A wild toast appeared!', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
 * ```
 */
declare const ToastAndroid: {
    SHORT: number;
    LONG: number;
    TOP: number;
    BOTTOM: number;
    CENTER: number;
    show: (message: string, duration: number) => void;
    showWithGravity: (message: string, duration: number, gravity: number) => void;
    showWithGravityAndOffset: (message: string, duration: number, gravity: number, xOffset: number, yOffset: number) => void;
};
export default ToastAndroid;
