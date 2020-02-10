import { AppearancePreferences } from "./NativeAppearance";
declare type AppearanceListener = ((preferences: AppearancePreferences) => void);
declare const _default: {
    /**
     * Note: Although color scheme is available immediately, it may change at any
     * time. Any rendering logic or styles that depend on this should try to call
     * this function on every render, rather than caching the value (for example,
     * using inline styles rather than setting a value in a `StyleSheet`).
     *
     * Example: `const colorScheme = Appearance.getColorScheme();`
     *
     * @returns {?ColorSchemeName} Value for the color scheme preference.
     */
    getColorScheme(): "dark" | "light" | null | undefined;
    /**
     * Add an event handler that is fired when appearance preferences change.
     */
    addChangeListener(listener: AppearanceListener): void;
    /**
     * Remove an event handler.
     */
    removeChangeListener(listener: AppearanceListener): void;
};
export default _default;
