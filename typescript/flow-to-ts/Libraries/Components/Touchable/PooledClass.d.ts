import { Class } from "utility-types";
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
export default PooledClass;
