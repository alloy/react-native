yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/ActionSheetIOS/NativeActionSheetManager.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: () => {};
  readonly showActionSheetWithOptions: (options: {
    readonly title?: string | null | undefined;
    readonly message?: string | null | undefined;
    readonly options: Array<string> | null | undefined;
    readonly destructiveButtonIndices?: Array<number> | null | undefined;
    readonly cancelButtonIndex?: number | null | undefined;
    readonly anchor?: number | null | undefined;
    readonly tintColor?: number | null | undefined;
  }, callback: (buttonIndex: number) => void) => void;
  readonly showShareActionSheetWithOptions: (options: {
    readonly message?: string | null | undefined;
    readonly url?: string | null | undefined;
    readonly subject?: string | null | undefined;
    readonly anchor?: number | null | undefined;
    readonly tintColor?: number | null | undefined;
    readonly excludedActivityTypes?: Array<string> | null | undefined;
  }, failureCallback: (error: {
    readonly domain: string;
    readonly code: string;
    readonly userInfo?: Object | null | undefined;
    readonly message: string;
  }) => void, successCallback: (completed: boolean, activityType: string | null | undefined) => void) => void;
}

export default (TurboModuleRegistry.get<Spec>('ActionSheetManager') as Spec | null | undefined);
Done in 0.55s.
