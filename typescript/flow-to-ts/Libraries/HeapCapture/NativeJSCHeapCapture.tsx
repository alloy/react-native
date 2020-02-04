yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/HeapCapture/NativeJSCHeapCapture.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly captureComplete: (path: string, error: string | null | undefined) => void;
}

export default (TurboModuleRegistry.get<Spec>('JSCHeapCapture') as Spec | null | undefined);
Done in 0.47s.
