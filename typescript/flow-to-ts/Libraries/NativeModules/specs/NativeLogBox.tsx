yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/NativeModules/specs/NativeLogBox.js
'use strict';












import { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";
import * as TurboModuleRegistry from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly show: () => void;
  readonly hide: () => void;
}

export default (TurboModuleRegistry.get<Spec>('LogBox') as Spec | null | undefined);
Done in 0.46s.
