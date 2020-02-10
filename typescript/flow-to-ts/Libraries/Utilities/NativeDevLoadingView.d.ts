import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly showMessage: ((message: string, color: any, backgroundColor: any) => void);
    readonly hide: (() => void);
}
declare const _default: Spec | null | undefined;
export default _default;
