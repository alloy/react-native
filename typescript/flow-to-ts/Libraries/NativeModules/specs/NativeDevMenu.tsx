yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/NativeModules/specs/NativeDevMenu.js
'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly show: () => void;
  readonly reload: () => void;
  readonly debugRemotely: (enableDebug: boolean) => void;
  readonly setProfilingEnabled: (enabled: boolean) => void;
  readonly setHotLoadingEnabled: (enabled: boolean) => void;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('DevMenu') as Spec);
Done in 0.51s.
