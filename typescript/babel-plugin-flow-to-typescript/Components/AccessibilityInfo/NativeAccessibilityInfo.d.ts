import { TurboModule } from '../../TurboModule/RCTExport';
export interface Spec extends TurboModule {
    readonly isReduceMotionEnabled: (onSuccess: (isReduceMotionEnabled: boolean) => void) => void;
    readonly isTouchExplorationEnabled: (onSuccess: (isScreenReaderEnabled: boolean) => void) => void;
    readonly setAccessibilityFocus: (reactTag: number) => void;
    readonly announceForAccessibility: (announcement: string) => void;
}
declare const _default: Spec;
export default _default;
