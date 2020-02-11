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
     * iOS only
     */
    isBoldTextEnabled: () => Promise<boolean>;
    /**
     * iOS only
     */
    isGrayscaleEnabled: () => Promise<boolean>;
    /**
     * iOS only
     */
    isInvertColorsEnabled: () => Promise<boolean>;
    isReduceMotionEnabled: () => Promise<boolean>;
    /**
     * iOS only
     */
    isReduceTransparencyEnabled: () => Promise<boolean>;
    isScreenReaderEnabled: () => Promise<boolean>;
    /**
     * Deprecated
     *
     * Same as `isScreenReaderEnabled`
     */
    readonly fetch: () => Promise<boolean>;
    addEventListener: (eventName: "reduceMotionChanged" | "screenReaderChanged" | "change", handler: (...args: any) => any) => void;
    removeEventListener: (eventName: "reduceMotionChanged" | "screenReaderChanged" | "change", handler: (...args: any) => any) => void;
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
};
export default AccessibilityInfo;
