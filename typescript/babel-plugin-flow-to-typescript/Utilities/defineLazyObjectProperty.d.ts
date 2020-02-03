/**
 * Defines a lazily evaluated property on the supplied `object`.
 */
declare function defineLazyObjectProperty<T>(object: object, name: string, descriptor: {
    get: () => T;
    enumerable?: boolean;
    writable?: boolean;
}): void;
