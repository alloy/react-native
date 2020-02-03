'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly operationComplete: (token: number, result: string | null | undefined, error: string | null | undefined) => void;
}

export default (TurboModuleRegistry.get<Spec>('JSCSamplingProfiler') as Spec | null | undefined);