yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/DatePickerAndroid/NativeDatePickerAndroid.js
'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly open: (options: Object) => Promise<Object>;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('DatePickerAndroid') as Spec);
Done in 0.50s.
