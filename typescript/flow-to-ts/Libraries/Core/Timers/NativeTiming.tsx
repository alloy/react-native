yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Core/Timers/NativeTiming.js
'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly createTimer: (callbackID: number, duration: number, jsSchedulingTime: number, repeats: boolean) => void;
  readonly deleteTimer: (timerID: number) => void;
  readonly setSendIdleEvents: (sendIdleEvents: boolean) => void;
}

export default (TurboModuleRegistry.get<Spec>('Timing') as Spec | null | undefined);
Done in 0.48s.
