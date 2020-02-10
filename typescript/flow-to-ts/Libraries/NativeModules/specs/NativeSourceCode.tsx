'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: (() => {
    scriptURL: string;
  });
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SourceCode') as Spec);
