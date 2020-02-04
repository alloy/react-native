yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/AppleTV/NativeTVNavigationEventEmitter.js
'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}

export default (TurboModuleRegistry.get<Spec>('TVNavigationEventEmitter') as Spec | null | undefined);
Done in 0.51s.
