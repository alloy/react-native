import { $ReadOnly } from "utility-types";
declare class Dimensions {
    /**
     * NOTE: `useWindowDimensions` is the preffered API for React components.
     *
     * Initial dimensions are set before `runApplication` is called so they should
     * be available before any other require's are run, but may be updated later.
     *
     * Note: Although dimensions are available immediately, they may change (e.g
     * due to device rotation) so any rendering logic or styles that depend on
     * these constants should try to call this function on every render, rather
     * than caching the value (for example, using inline styles rather than
     * setting a value in a `StyleSheet`).
     *
     * Example: `const {height, width} = Dimensions.get('window');`
     *
     * @param {string} dim Name of dimension as defined when calling `set`.
     * @returns {Object?} Value for the dimension.
     */
    static get(dim: string): any;
    /**
     * This should only be called from native code by sending the
     * didUpdateDimensions event.
     *
     * @param {object} dims Simple string-keyed object of dimensions to set
     */
    static set(dims: $ReadOnly<{
        [key: string]: any;
    }>): void;
    /**
     * Add an event handler. Supported events:
     *
     * - `change`: Fires when a property within the `Dimensions` object changes. The argument
     *   to the event handler is an object with `window` and `screen` properties whose values
     *   are the same as the return values of `Dimensions.get('window')` and
     *   `Dimensions.get('screen')`, respectively.
     */
    static addEventListener(type: "change", handler: ((...args: any) => any)): void;
    /**
     * Remove an event handler.
     */
    static removeEventListener(type: "change", handler: ((...args: any) => any)): void;
}
export default Dimensions;
