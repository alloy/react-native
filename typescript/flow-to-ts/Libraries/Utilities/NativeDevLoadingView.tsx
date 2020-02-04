yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/NativeDevLoadingView.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly showMessage: (message: string, color: Object, backgroundColor: Object) => void;
  readonly hide: () => void;
}

export default (TurboModuleRegistry.get<Spec>('DevLoadingView') as Spec | null | undefined);
Done in 0.51s.
