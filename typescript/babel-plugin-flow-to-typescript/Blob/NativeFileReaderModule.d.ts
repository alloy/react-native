import { TurboModule } from '../TurboModule/RCTExport';
export interface Spec extends TurboModule {
    readonly readAsDataURL: (data: object) => Promise<string>;
    readonly readAsText: (data: object, encoding: string) => Promise<string>;
}
declare const _default: Spec;
export default _default;
