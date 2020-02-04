yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/AppState/NativeAppState.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: () => {
    initialAppState: string;
  };
  readonly getCurrentAppState: (success: (appState: {app_state: string;}) => void, error: (error: Object) => void) => void;
  // Events
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('AppState') as Spec);
Done in 0.50s.
