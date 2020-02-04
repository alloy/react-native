yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/Clipboard/NativeClipboard.js
'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: () => {};
  readonly getString: () => Promise<string>;
  readonly setString: (content: string) => void;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('Clipboard') as Spec);
Done in 0.48s.
