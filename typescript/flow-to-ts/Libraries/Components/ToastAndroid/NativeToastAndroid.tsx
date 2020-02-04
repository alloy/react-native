yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/ToastAndroid/NativeToastAndroid.js
'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: () => {
    SHORT: number;
    LONG: number;
    TOP: number;
    BOTTOM: number;
    CENTER: number;
  };
  readonly show: (message: string, duration: number) => void;
  readonly showWithGravity: (message: string, duration: number, gravity: number) => void;
  readonly showWithGravityAndOffset: (message: string, duration: number, gravity: number, xOffset: number, yOffset: number) => void;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('ToastAndroid') as Spec);
Done in 0.49s.
