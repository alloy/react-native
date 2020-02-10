'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: (() => {});
  readonly share: ((content: {title?: string;message?: string;}, dialogTitle?: string) => Promise<{action: string;}>);
}

export default (TurboModuleRegistry.get<Spec>('ShareModule') as Spec | null | undefined);
