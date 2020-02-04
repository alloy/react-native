'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: () => {
    settings: Object;
  };
  readonly setValues: (values: Object) => void;
  readonly deleteValues: (values: Array<string>) => void;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SettingsManager') as Spec);
