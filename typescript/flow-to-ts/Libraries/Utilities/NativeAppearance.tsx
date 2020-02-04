yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/NativeAppearance.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export type ColorSchemeName = "light" | "dark";

export type AppearancePreferences = {
  // TODO: (hramos) T52919652 Use ?ColorSchemeName once codegen supports union
  // types.

  /* 'light' | 'dark' */
  colorScheme?: string | null | undefined;
};

export interface Spec extends TurboModule {
  // TODO: (hramos) T52919652 Use ?ColorSchemeName once codegen supports union
  // types.

  /* 'light' | 'dark' */
  readonly getColorScheme: () => string | null | undefined;
  // RCTEventEmitter
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}

export default (TurboModuleRegistry.get<Spec>('Appearance') as Spec | null | undefined);
Done in 0.51s.
