'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly open: (options: Object) => Promise<Object>;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('DatePickerAndroid') as Spec);