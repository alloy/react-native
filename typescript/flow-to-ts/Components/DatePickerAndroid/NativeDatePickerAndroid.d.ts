import { TurboModule } from "../../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly open: (options: Object) => Promise<Object>;
}
declare const _default: Spec;
export default _default;
