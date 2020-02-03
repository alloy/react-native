import { TurboModule } from '../../TurboModule/RCTExport';
export interface Spec extends TurboModule {
    readonly open: (options: object) => Promise<object>;
}
declare const _default: Spec;
export default _default;
