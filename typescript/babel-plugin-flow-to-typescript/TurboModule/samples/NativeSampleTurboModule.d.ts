import { TurboModule } from '../RCTExport';
export interface Spec extends TurboModule {
    readonly getConstants: () => {
        const1: boolean;
        const2: number;
        const3: string;
    };
    readonly voidFunc: () => void;
    readonly getBool: (arg: boolean) => boolean;
    readonly getNumber: (arg: number) => number;
    readonly getString: (arg: string) => string;
    readonly getArray: (arg: Array<any>) => Array<any>;
    readonly getObject: (arg: object) => object;
    readonly getValue: (x: number, y: string, z: object) => object;
    readonly getValueWithCallback: (callback: (value: string) => void) => void;
    readonly getValueWithPromise: (error: boolean) => Promise<string>;
}
declare const _default: Spec;
export default _default;
