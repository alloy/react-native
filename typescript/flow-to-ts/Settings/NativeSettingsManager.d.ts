import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly getConstants: () => {
        settings: Object;
    };
    readonly setValues: (values: Object) => void;
    readonly deleteValues: (values: Array<string>) => void;
}
declare const _default: Spec;
export default _default;
