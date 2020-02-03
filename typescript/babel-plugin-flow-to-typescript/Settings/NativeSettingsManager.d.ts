import { TurboModule } from '../TurboModule/RCTExport';
export interface Spec extends TurboModule {
    readonly getConstants: () => {
        settings: object;
    };
    readonly setValues: (values: object) => void;
    readonly deleteValues: (values: Array<string>) => void;
}
declare const _default: Spec;
export default _default;
