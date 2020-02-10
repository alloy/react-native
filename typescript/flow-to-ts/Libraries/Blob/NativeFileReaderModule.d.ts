import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly readAsDataURL: ((data: any) => Promise<string>);
    readonly readAsText: ((data: any, encoding: string) => Promise<string>);
}
declare const _default: Spec;
export default _default;
