yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Blob/NativeFileReaderModule.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly readAsDataURL: (data: Object) => Promise<string>;
  readonly readAsText: (data: Object, encoding: string) => Promise<string>;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('FileReaderModule') as Spec);
Done in 0.48s.
