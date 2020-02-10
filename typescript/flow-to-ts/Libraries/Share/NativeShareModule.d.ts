import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly getConstants: (() => {});
    readonly share: ((content: {
        title?: string;
        message?: string;
    }, dialogTitle?: string) => Promise<{
        action: string;
    }>);
}
declare const _default: Spec | null | undefined;
export default _default;
