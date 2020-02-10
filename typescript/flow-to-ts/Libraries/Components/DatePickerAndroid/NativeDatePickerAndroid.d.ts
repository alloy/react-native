import { TurboModule } from "../../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly open: ((options: any) => Promise<any>);
}
declare const _default: Spec;
export default _default;
