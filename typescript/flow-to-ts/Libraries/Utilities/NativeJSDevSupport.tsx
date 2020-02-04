yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/NativeJSDevSupport.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: () => {
    ERROR_CODE_EXCEPTION: number;
    ERROR_CODE_VIEW_NOT_FOUND: number;
  };
  readonly onSuccess: (data: string) => void;
  readonly onFailure: (errorCode: number, error: string) => void;
}

export default (TurboModuleRegistry.get<Spec>('JSDevSupport') as Spec | null | undefined);
Done in 0.49s.
