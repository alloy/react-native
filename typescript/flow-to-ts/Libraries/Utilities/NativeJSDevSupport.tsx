'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: (() => {
    ERROR_CODE_EXCEPTION: number;
    ERROR_CODE_VIEW_NOT_FOUND: number;
  });
  readonly onSuccess: ((data: string) => void);
  readonly onFailure: ((errorCode: number, error: string) => void);
}

export default (TurboModuleRegistry.get<Spec>('JSDevSupport') as Spec | null | undefined);
