yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Linking/NativeLinking.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";
import Platform from "../Utilities/Platform";

export interface Spec extends TurboModule {
  // Common interface
  readonly getInitialURL: () => Promise<string>;
  readonly canOpenURL: (url: string) => Promise<boolean>;
  readonly openURL: (url: string) => Promise<void>;
  readonly openSettings: () => Promise<void>;
  // Android only
  readonly sendIntent: (action: string, extras: Array<{
    key: string;
    value: string | number | boolean;

  }> | null | undefined) => Promise<void>;
  // Events
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}

export default ((Platform.OS === 'android' ? TurboModuleRegistry.getEnforcing<Spec>('IntentAndroid') : TurboModuleRegistry.getEnforcing<Spec>('LinkingManager')) as Spec);
Done in 0.48s.
