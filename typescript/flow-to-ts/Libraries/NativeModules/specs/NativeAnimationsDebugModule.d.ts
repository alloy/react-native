import { TurboModule } from "../../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly startRecordingFps: (() => void);
    readonly stopRecordingFps: ((animationStopTimeMs: number) => void);
}
declare const _default: Spec | null | undefined;
export default _default;
