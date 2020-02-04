yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/NativeModules/specs/NativeRedBox.js
'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly setExtraData: (extraData: Object, forIdentifier: string) => void;
  readonly dismiss: () => void;
}

export default (TurboModuleRegistry.get<Spec>('RedBox') as Spec | null | undefined);
Done in 0.48s.
