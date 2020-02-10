'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly show: (() => void);
  readonly reload: (() => void);
  readonly debugRemotely: ((enableDebug: boolean) => void);
  readonly setProfilingEnabled: ((enabled: boolean) => void);
  readonly setHotLoadingEnabled: ((enabled: boolean) => void);
}

export default (TurboModuleRegistry.getEnforcing<Spec>('DevMenu') as Spec);
