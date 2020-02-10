import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly getConstants: (() => {
        ERROR_CODE_EXCEPTION: number;
        ERROR_CODE_VIEW_NOT_FOUND: number;
    });
    readonly onSuccess: ((data: string) => void);
    readonly onFailure: ((errorCode: number, error: string) => void);
}
declare const _default: Spec | null | undefined;
export default _default;
