declare const Vibration: {
    /**
     * Trigger a vibration with specified `pattern`.
     *
     * See https://facebook.github.io/react-native/docs/vibration.html#vibrate
     */
    vibrate: (pattern?: number | number[], repeat?: boolean) => void;
    /**
     * Stop vibration
     *
     * See https://facebook.github.io/react-native/docs/vibration.html#cancel
     */
    cancel: () => void;
};
export default Vibration;
