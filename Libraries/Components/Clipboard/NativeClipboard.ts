'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: () => {};
  readonly getString: () => Promise<string>;
  readonly setString: (content: string) => void;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('Clipboard') as Spec);