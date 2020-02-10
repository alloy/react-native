'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

/**
 * Native Module used for playing sounds in native platform.
 */
export interface Spec extends TurboModule {
  readonly playTouchSound: (() => void);
}

export default (TurboModuleRegistry.get<Spec>('SoundManager') as Spec | null | undefined);
