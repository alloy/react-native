yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/Sound/NativeSoundManager.js
'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

/**
 * Native Module used for playing sounds in native platform.
 */
export interface Spec extends TurboModule {
  readonly playTouchSound: () => void;
}

export default (TurboModuleRegistry.get<Spec>('SoundManager') as Spec | null | undefined);
Done in 0.50s.
