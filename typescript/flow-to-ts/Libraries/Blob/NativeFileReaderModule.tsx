'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly readAsDataURL: ((data: any) => Promise<string>);
  readonly readAsText: ((data: any, encoding: string) => Promise<string>);
}

export default (TurboModuleRegistry.getEnforcing<Spec>('FileReaderModule') as Spec);
