'use strict';












import { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";
import * as TurboModuleRegistry from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly show: () => void;
  readonly hide: () => void;
}

export default (TurboModuleRegistry.get<Spec>('LogBox') as Spec | null | undefined);
