'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly captureComplete: (path: string, error: string | null | undefined) => void;
}

export default (TurboModuleRegistry.get<Spec>('JSCHeapCapture') as Spec | null | undefined);
