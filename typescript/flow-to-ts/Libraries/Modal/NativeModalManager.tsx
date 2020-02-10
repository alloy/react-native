'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  // RCTEventEmitter
  readonly addListener: ((eventName: string) => void);
  readonly removeListeners: ((count: number) => void);
}

export default (TurboModuleRegistry.get<Spec>('ModalManager') as Spec | null | undefined);
