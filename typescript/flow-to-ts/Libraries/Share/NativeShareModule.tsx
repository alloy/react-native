yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Share/NativeShareModule.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: () => {};
  readonly share: (content: {title?: string;message?: string;}, dialogTitle?: string) => Promise<{action: string;}>;
}

export default (TurboModuleRegistry.get<Spec>('ShareModule') as Spec | null | undefined);
Done in 0.53s.
