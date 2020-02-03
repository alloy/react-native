'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly invokeDefaultBackPressHandler: () => void;
}

export default (TurboModuleRegistry.get<Spec>('DeviceEventManager') as Spec | null | undefined);