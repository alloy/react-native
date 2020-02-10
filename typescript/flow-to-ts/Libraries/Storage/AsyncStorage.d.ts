/**
 * `AsyncStorage` is a simple, unencrypted, asynchronous, persistent, key-value
 * storage system that is global to the app.  It should be used instead of
 * LocalStorage.
 *
 * See http://facebook.github.io/react-native/docs/asyncstorage.html
 */
declare const AsyncStorage: {
    _getRequests: any[];
    _getKeys: string[];
    _immediate: number | null | undefined;
    /**
     * Fetches an item for a `key` and invokes a callback upon completion.
     *
     * See http://facebook.github.io/react-native/docs/asyncstorage.html#getitem
     */
    getItem: (key: string, callback?: ((error: Error | null | undefined, result: string | null | undefined) => void) | null | undefined) => any;
    /**
     * Sets the value for a `key` and invokes a callback upon completion.
     *
     * See http://facebook.github.io/react-native/docs/asyncstorage.html#setitem
     */
    setItem: (key: string, value: string, callback?: ((error: Error | null | undefined) => void) | null | undefined) => any;
    /**
     * Removes an item for a `key` and invokes a callback upon completion.
     *
     * See http://facebook.github.io/react-native/docs/asyncstorage.html#removeitem
     */
    removeItem: (key: string, callback?: ((error: Error | null | undefined) => void) | null | undefined) => any;
    /**
     * Merges an existing `key` value with an input value, assuming both values
     * are stringified JSON.
     *
     * **NOTE:** This is not supported by all native implementations.
     *
     * See http://facebook.github.io/react-native/docs/asyncstorage.html#mergeitem
     */
    mergeItem: (key: string, value: string, callback?: ((error: Error | null | undefined) => void) | null | undefined) => any;
    /**
     * Erases *all* `AsyncStorage` for all clients, libraries, etc. You probably
     * don't want to call this; use `removeItem` or `multiRemove` to clear only
     * your app's keys.
     *
     * See http://facebook.github.io/react-native/docs/asyncstorage.html#clear
     */
    clear: (callback?: ((error: Error | null | undefined) => void) | null | undefined) => any;
    /**
     * Gets *all* keys known to your app; for all callers, libraries, etc.
     *
     * See http://facebook.github.io/react-native/docs/asyncstorage.html#getallkeys
     */
    getAllKeys: (callback?: ((error: Error | null | undefined, keys: string[] | null | undefined) => void) | null | undefined) => any;
    /**
     * The following batched functions are useful for executing a lot of
     * operations at once, allowing for native optimizations and provide the
     * convenience of a single callback after all operations are complete.
     *
     * These functions return arrays of errors, potentially one for every key.
     * For key-specific errors, the Error object will have a key property to
     * indicate which key caused the error.
     */
    /**
     * Flushes any pending requests using a single batch call to get the data.
     *
     * See http://facebook.github.io/react-native/docs/asyncstorage.html#flushgetrequests
     * */
    flushGetRequests: () => void;
    /**
     * This allows you to batch the fetching of items given an array of `key`
     * inputs. Your callback will be invoked with an array of corresponding
     * key-value pairs found.
     *
     * See http://facebook.github.io/react-native/docs/asyncstorage.html#multiget
     */
    multiGet: (keys: string[], callback?: ((errors: Error[] | null | undefined, result: string[][] | null | undefined) => void) | null | undefined) => any;
    /**
     * Use this as a batch operation for storing multiple key-value pairs. When
     * the operation completes you'll get a single callback with any errors.
     *
     * See http://facebook.github.io/react-native/docs/asyncstorage.html#multiset
     */
    multiSet: (keyValuePairs: string[][], callback?: ((errors: Error[] | null | undefined) => void) | null | undefined) => any;
    /**
     * Call this to batch the deletion of all keys in the `keys` array.
     *
     * See http://facebook.github.io/react-native/docs/asyncstorage.html#multiremove
     */
    multiRemove: (keys: string[], callback?: ((errors: Error[] | null | undefined) => void) | null | undefined) => any;
    /**
     * Batch operation to merge in existing and new values for a given set of
     * keys. This assumes that the values are stringified JSON.
     *
     * **NOTE**: This is not supported by all native implementations.
     *
     * See http://facebook.github.io/react-native/docs/asyncstorage.html#multimerge
     */
    multiMerge: (keyValuePairs: string[][], callback?: ((errors: Error[] | null | undefined) => void) | null | undefined) => any;
};
export default AsyncStorage;
