yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/NativeModules/specs/NativeAnimationsDebugModule.js
'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly startRecordingFps: () => void;
  readonly stopRecordingFps: (animationStopTimeMs: number) => void;
}

export default (TurboModuleRegistry.get<Spec>('AnimationsDebugModule') as Spec | null | undefined);
Done in 0.52s.
