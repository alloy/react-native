'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: () => {};
  readonly vibrate: (pattern?: number | null | undefined) => void;
  // Android only
  readonly vibrateByPattern: (pattern: Array<number>, repeat: number) => void;
  readonly cancel: () => void;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('Vibration') as Spec);
