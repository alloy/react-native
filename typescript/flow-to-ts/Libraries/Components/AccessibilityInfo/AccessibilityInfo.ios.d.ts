/**
 * Sometimes it's useful to know whether or not the device has a screen reader
 * that is currently active. The `AccessibilityInfo` API is designed for this
 * purpose. You can use it to query the current state of the screen reader as
 * well as to register to be notified when the state of the screen reader
 * changes.
 *
 * See http://facebook.github.io/react-native/docs/accessibilityinfo.html
 */
declare const AccessibilityInfo: {
    /**
     * Query whether bold text is currently enabled.
     *
     * Returns a promise which resolves to a boolean.
     * The result is `true` when bold text is enabled and `false` otherwise.
     *
     * See http://facebook.github.io/react-native/docs/accessibilityinfo.html#isBoldTextEnabled
     */
    isBoldTextEnabled: () => any;
    /**
     * Query whether grayscale is currently enabled.
     *
     * Returns a promise which resolves to a boolean.
     * The result is `true` when grayscale is enabled and `false` otherwise.
     *
     * See http://facebook.github.io/react-native/docs/accessibilityinfo.html#isGrayscaleEnabled
     */
    isGrayscaleEnabled: () => any;
    /**
     * Query whether inverted colors are currently enabled.
     *
     * Returns a promise which resolves to a boolean.
     * The result is `true` when invert color is enabled and `false` otherwise.
     *
     * See http://facebook.github.io/react-native/docs/accessibilityinfo.html#isInvertColorsEnabled
     */
    isInvertColorsEnabled: () => any;
    /**
     * Query whether reduced motion is currently enabled.
     *
     * Returns a promise which resolves to a boolean.
     * The result is `true` when a reduce motion is enabled and `false` otherwise.
     *
     * See http://facebook.github.io/react-native/docs/accessibilityinfo.html#isReduceMotionEnabled
     */
    isReduceMotionEnabled: () => any;
    /**
     * Query whether reduced transparency is currently enabled.
     *
     * Returns a promise which resolves to a boolean.
     * The result is `true` when a reduce transparency is enabled and `false` otherwise.
     *
     * See http://facebook.github.io/react-native/docs/accessibilityinfo.html#isReduceTransparencyEnabled
     */
    isReduceTransparencyEnabled: () => any;
    /**
     * Query whether a screen reader is currently enabled.
     *
     * Returns a promise which resolves to a boolean.
     * The result is `true` when a screen reader is enabled and `false` otherwise.
     *
     * See http://facebook.github.io/react-native/docs/accessibilityinfo.html#isScreenReaderEnabled
     */
    isScreenReaderEnabled: () => any;
    /**
     * Deprecated
     *
     * Same as `isScreenReaderEnabled`
     */
    readonly fetch: any;
    /**
     * Add an event handler. Supported events:
     *
     * - `boldTextChanged`: iOS-only event. Fires when the state of the bold text toggle changes.
     *   The argument to the event handler is a boolean. The boolean is `true` when a bold text
     *   is enabled and `false` otherwise.
     * - `grayscaleChanged`: iOS-only event. Fires when the state of the gray scale toggle changes.
     *   The argument to the event handler is a boolean. The boolean is `true` when a gray scale
     *   is enabled and `false` otherwise.
     * - `invertColorsChanged`: iOS-only event. Fires when the state of the invert colors toggle
     *   changes. The argument to the event handler is a boolean. The boolean is `true` when a invert
     *   colors is enabled and `false` otherwise.
     * - `reduceMotionChanged`: Fires when the state of the reduce motion toggle changes.
     *   The argument to the event handler is a boolean. The boolean is `true` when a reduce
     *   motion is enabled (or when "Transition Animation Scale" in "Developer options" is
     *   "Animation off") and `false` otherwise.
     * - `reduceTransparencyChanged`: iOS-only event. Fires when the state of the reduce transparency
     *   toggle changes.  The argument to the event handler is a boolean. The boolean is `true`
     *   when a reduce transparency is enabled and `false` otherwise.
     * - `screenReaderChanged`: Fires when the state of the screen reader changes. The argument
     *   to the event handler is a boolean. The boolean is `true` when a screen
     *   reader is enabled and `false` otherwise.
     * - `announcementFinished`: iOS-only event. Fires when the screen reader has
     *   finished making an announcement. The argument to the event handler is a
     *   dictionary with these keys:
     *     - `announcement`: The string announced by the screen reader.
     *     - `success`: A boolean indicating whether the announcement was
     *       successfully made.
     *
     * See http://facebook.github.io/react-native/docs/accessibilityinfo.html#addeventlistener
     */
    addEventListener: (eventName: "change" | "reduceMotionChanged" | "screenReaderChanged" | "announcementFinished" | "boldTextChanged" | "grayscaleChanged" | "invertColorsChanged" | "reduceTransparencyChanged", handler: (...args: any) => any) => any;
    /**
     * Set accessibility focus to a react component.
     *
     * See http://facebook.github.io/react-native/docs/accessibilityinfo.html#setaccessibilityfocus
     */
    setAccessibilityFocus: (reactTag: number) => void;
    /**
     * Post a string to be announced by the screen reader.
     *
     * See http://facebook.github.io/react-native/docs/accessibilityinfo.html#announceforaccessibility
     */
    announceForAccessibility: (announcement: string) => void;
    /**
     * Remove an event handler.
     *
     * See http://facebook.github.io/react-native/docs/accessibilityinfo.html#removeeventlistener
     */
    removeEventListener: (eventName: "change" | "reduceMotionChanged" | "screenReaderChanged" | "announcementFinished" | "boldTextChanged" | "grayscaleChanged" | "invertColorsChanged" | "reduceTransparencyChanged", handler: (...args: any) => any) => void;
};
export default AccessibilityInfo;
