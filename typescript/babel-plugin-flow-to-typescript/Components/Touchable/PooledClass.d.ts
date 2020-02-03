declare type Class<T> = new (...args: any) => T;
declare const invariant: any;
/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
declare const oneArgumentPooler: (copyFieldsFrom: any) => any;
declare const twoArgumentPooler: (a1: any, a2: any) => any;
declare const threeArgumentPooler: (a1: any, a2: any, a3: any) => any;
declare const fourArgumentPooler: (a1: any, a2: any, a3: any, a4: any) => any;
declare const standardReleaser: (instance: any) => void;
declare const DEFAULT_POOL_SIZE = 10;
declare const DEFAULT_POOLER: (copyFieldsFrom: any) => any;
declare type Pooler = any;
/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
declare const addPoolingTo: <T>(CopyConstructor: Class<T>, pooler: any) => Class<T> & {
    getPooled(...args: readonly unknown[]): T;
    release(instance: unknown): void;
};
declare const PooledClass: {
    addPoolingTo: <T>(CopyConstructor: Class<T>, pooler: any) => Class<T> & {
        getPooled(...args: readonly unknown[]): T;
        release(instance: unknown): void;
    };
    oneArgumentPooler: any;
    twoArgumentPooler: any;
    threeArgumentPooler: any;
    fourArgumentPooler: any;
};
