import { TurboModule } from '../../TurboModule/RCTExport';
export interface Spec extends TurboModule {
    readonly getCurrentBoldTextState: (onSuccess: (isBoldTextEnabled: boolean) => void, onError: (error: object) => void) => void;
    readonly getCurrentGrayscaleState: (onSuccess: (isGrayscaleEnabled: boolean) => void, onError: (error: object) => void) => void;
    readonly getCurrentInvertColorsState: (onSuccess: (isInvertColorsEnabled: boolean) => void, onError: (error: object) => void) => void;
    readonly getCurrentReduceMotionState: (onSuccess: (isReduceMotionEnabled: boolean) => void, onError: (error: object) => void) => void;
    readonly getCurrentReduceTransparencyState: (onSuccess: (isReduceTransparencyEnabled: boolean) => void, onError: (error: object) => void) => void;
    readonly getCurrentVoiceOverState: (onSuccess: (isScreenReaderEnabled: boolean) => void, onError: (error: object) => void) => void;
    readonly setAccessibilityContentSizeMultipliers: (JSMultipliers: {
        readonly extraSmall?: number | null;
        readonly small?: number | null;
        readonly medium?: number | null;
        readonly large?: number | null;
        readonly extraLarge?: number | null;
        readonly extraExtraLarge?: number | null;
        readonly extraExtraExtraLarge?: number | null;
        readonly accessibilityMedium?: number | null;
        readonly accessibilityLarge?: number | null;
        readonly accessibilityExtraLarge?: number | null;
        readonly accessibilityExtraExtraLarge?: number | null;
        readonly accessibilityExtraExtraExtraLarge?: number | null;
    }) => void;
    readonly setAccessibilityFocus: (reactTag: number) => void;
    readonly announceForAccessibility: (announcement: string) => void;
}
declare const _default: Spec;
export default _default;
