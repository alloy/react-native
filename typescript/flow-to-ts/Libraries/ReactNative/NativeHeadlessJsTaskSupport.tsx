yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/ReactNative/NativeHeadlessJsTaskSupport.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly notifyTaskFinished: (taskId: number) => void;
  readonly notifyTaskRetry: (taskId: number) => Promise<boolean>;
}

export default (TurboModuleRegistry.get<Spec>('HeadlessJsTaskSupport') as Spec | null | undefined);
Done in 0.48s.
