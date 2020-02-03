'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly showMessage: (message: string, color: Object, backgroundColor: Object) => void;
  readonly hide: () => void;
}

export default (TurboModuleRegistry.get<Spec>('DevLoadingView') as Spec | null | undefined);