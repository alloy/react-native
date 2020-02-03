import { TurboModule } from '../../TurboModule/RCTExport';
export interface Spec extends TurboModule {
    readonly getConstants: () => {
        scriptURL: string;
    };
}
declare const _default: Spec;
export default _default;
