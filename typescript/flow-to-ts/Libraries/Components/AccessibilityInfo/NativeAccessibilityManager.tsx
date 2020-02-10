'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getCurrentBoldTextState: ((onSuccess: ((isBoldTextEnabled: boolean) => void), onError: ((error: any) => void)) => void);
  readonly getCurrentGrayscaleState: ((onSuccess: ((isGrayscaleEnabled: boolean) => void), onError: ((error: any) => void)) => void);
  readonly getCurrentInvertColorsState: ((onSuccess: ((isInvertColorsEnabled: boolean) => void), onError: ((error: any) => void)) => void);
  readonly getCurrentReduceMotionState: ((onSuccess: ((isReduceMotionEnabled: boolean) => void), onError: ((error: any) => void)) => void);
  readonly getCurrentReduceTransparencyState: ((onSuccess: ((isReduceTransparencyEnabled: boolean) => void), onError: ((error: any) => void)) => void);
  readonly getCurrentVoiceOverState: ((onSuccess: ((isScreenReaderEnabled: boolean) => void), onError: ((error: any) => void)) => void);
  readonly setAccessibilityContentSizeMultipliers: ((JSMultipliers: {
    readonly extraSmall?: number | null | undefined;
    readonly small?: number | null | undefined;
    readonly medium?: number | null | undefined;
    readonly large?: number | null | undefined;
    readonly extraLarge?: number | null | undefined;
    readonly extraExtraLarge?: number | null | undefined;
    readonly extraExtraExtraLarge?: number | null | undefined;
    readonly accessibilityMedium?: number | null | undefined;
    readonly accessibilityLarge?: number | null | undefined;
    readonly accessibilityExtraLarge?: number | null | undefined;
    readonly accessibilityExtraExtraLarge?: number | null | undefined;
    readonly accessibilityExtraExtraExtraLarge?: number | null | undefined;
  }) => void);
  readonly setAccessibilityFocus: ((reactTag: number) => void);
  readonly announceForAccessibility: ((announcement: string) => void);
}

export default (TurboModuleRegistry.get<Spec>('AccessibilityManager') as Spec | null | undefined);
