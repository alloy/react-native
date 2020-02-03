/**
 * Defines a lazily evaluated property on the supplied `object`.
 */
declare function defineLazyObjectProperty<T>(object: Object, name: string, descriptor: {
    get: () => T;
    enumerable?: boolean;
    writable?: boolean;
}): void;
