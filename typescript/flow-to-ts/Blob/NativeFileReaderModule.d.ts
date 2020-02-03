import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly readAsDataURL: (data: Object) => Promise<string>;
    readonly readAsText: (data: Object, encoding: string) => Promise<string>;
}
declare const _default: Spec;
export default _default;
