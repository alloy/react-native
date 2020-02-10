'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly notifyTaskFinished: ((taskId: number) => void);
  readonly notifyTaskRetry: ((taskId: number) => Promise<boolean>);
}

export default (TurboModuleRegistry.get<Spec>('HeadlessJsTaskSupport') as Spec | null | undefined);
