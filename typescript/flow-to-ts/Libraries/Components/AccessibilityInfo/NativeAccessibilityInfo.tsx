yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/AccessibilityInfo/NativeAccessibilityInfo.js
'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly isReduceMotionEnabled: (onSuccess: (isReduceMotionEnabled: boolean) => void) => void;
  readonly isTouchExplorationEnabled: (onSuccess: (isScreenReaderEnabled: boolean) => void) => void;
  readonly setAccessibilityFocus: (reactTag: number) => void;
  readonly announceForAccessibility: (announcement: string) => void;
}

export default (TurboModuleRegistry.get<Spec>('AccessibilityInfo') as Spec | null | undefined);
Done in 0.58s.
