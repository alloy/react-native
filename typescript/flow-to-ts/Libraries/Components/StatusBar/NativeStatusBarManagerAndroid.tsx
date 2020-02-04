yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/StatusBar/NativeStatusBarManagerAndroid.js
'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: () => {
    readonly HEIGHT: number;
    readonly DEFAULT_BACKGROUND_COLOR: number;
  };
  readonly setColor: (color: number, animated: boolean) => void;
  readonly setTranslucent: (translucent: boolean) => void;

  /**
   *  - statusBarStyles can be:
   *    - 'default'
   *    - 'dark-content'
   */
  readonly setStyle: (statusBarStyle?: string | null | undefined) => void;
  readonly setHidden: (hidden: boolean) => void;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('StatusBarManager') as Spec);
Done in 0.51s.
