'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: () => {
    isRTL: boolean;
    doLeftAndRightSwapInRTL: boolean;
  };
  allowRTL: (allowRTL: boolean) => void;
  forceRTL: (forceRTL: boolean) => void;
  swapLeftAndRightInRTL: (flipStyles: boolean) => void;
}

export default (TurboModuleRegistry.get<Spec>('I18nManager') as Spec | null | undefined);