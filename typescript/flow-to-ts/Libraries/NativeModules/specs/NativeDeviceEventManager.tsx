yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/NativeModules/specs/NativeDeviceEventManager.js
'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly invokeDefaultBackPressHandler: () => void;
}

export default (TurboModuleRegistry.get<Spec>('DeviceEventManager') as Spec | null | undefined);
Done in 0.46s.
