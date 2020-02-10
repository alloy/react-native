import { TurboModule } from "../../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly createTimer: ((callbackID: number, duration: number, jsSchedulingTime: number, repeats: boolean) => void);
    readonly deleteTimer: ((timerID: number) => void);
    readonly setSendIdleEvents: ((sendIdleEvents: boolean) => void);
}
declare const _default: Spec | null | undefined;
export default _default;
