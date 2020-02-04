yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Vibration/NativeVibration.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: () => {};
  readonly vibrate: (pattern?: number | null | undefined) => void;
  // Android only
  readonly vibrateByPattern: (pattern: Array<number>, repeat: number) => void;
  readonly cancel: () => void;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('Vibration') as Spec);
Done in 0.63s.
