import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly getConstants: () => {
        isRTL: boolean;
        doLeftAndRightSwapInRTL: boolean;
    };
    allowRTL: (allowRTL: boolean) => void;
    forceRTL: (forceRTL: boolean) => void;
    swapLeftAndRightInRTL: (flipStyles: boolean) => void;
}
declare const _default: Spec;
export default _default;
