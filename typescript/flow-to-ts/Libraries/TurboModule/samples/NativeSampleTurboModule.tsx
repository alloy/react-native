yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/TurboModule/samples/NativeSampleTurboModule.js
'use strict';












import { TurboModule } from "../RCTExport";
import * as TurboModuleRegistry from "../TurboModuleRegistry";

export interface Spec extends TurboModule {
  // Exported methods.
  readonly getConstants: () => {
    const1: boolean;
    const2: number;
    const3: string;
  };
  readonly voidFunc: () => void;
  readonly getBool: (arg: boolean) => boolean;
  readonly getNumber: (arg: number) => number;
  readonly getString: (arg: string) => string;
  readonly getArray: (arg: Array<any>) => Array<any>;
  readonly getObject: (arg: Object) => Object;
  readonly getValue: (x: number, y: string, z: Object) => Object;
  readonly getValueWithCallback: (callback: (value: string) => void) => void;
  readonly getValueWithPromise: (error: boolean) => Promise<string>;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule') as Spec);
Done in 0.52s.
