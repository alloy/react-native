import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly notifyTaskFinished: ((taskId: number) => void);
    readonly notifyTaskRetry: ((taskId: number) => Promise<boolean>);
}
declare const _default: Spec | null | undefined;
export default _default;
