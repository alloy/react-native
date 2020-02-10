'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly open: ((options: any) => Promise<any>);
}

export default (TurboModuleRegistry.getEnforcing<Spec>('DatePickerAndroid') as Spec);
