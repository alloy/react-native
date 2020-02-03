'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly setExtraData: (extraData: Object, forIdentifier: string) => void;
  readonly dismiss: () => void;
}

export default (TurboModuleRegistry.get<Spec>('RedBox') as Spec | null | undefined);