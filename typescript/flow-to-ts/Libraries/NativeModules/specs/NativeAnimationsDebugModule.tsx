'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly startRecordingFps: () => void;
  readonly stopRecordingFps: (animationStopTimeMs: number) => void;
}

export default (TurboModuleRegistry.get<Spec>('AnimationsDebugModule') as Spec | null | undefined);
