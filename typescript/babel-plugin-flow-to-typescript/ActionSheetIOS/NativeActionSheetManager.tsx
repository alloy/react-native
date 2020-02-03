/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */
'use strict';

import { TurboModule } from '../TurboModule/RCTExport';
import * as TurboModuleRegistry from '../TurboModule/TurboModuleRegistry';
export interface Spec extends TurboModule {
  readonly getConstants: () => {};
  readonly showActionSheetWithOptions: (options: {
    readonly title?: string | null;
    readonly message?: string | null;
    readonly options: Array<string> | undefined | null;
    readonly destructiveButtonIndices?: Array<number> | null;
    readonly cancelButtonIndex?: number | null;
    readonly anchor?: number | null;
    readonly tintColor?: number | null;
  }, callback: (buttonIndex: number) => void) => void;
  readonly showShareActionSheetWithOptions: (options: {
    readonly message?: string | null;
    readonly url?: string | null;
    readonly subject?: string | null;
    readonly anchor?: number | null;
    readonly tintColor?: number | null;
    readonly excludedActivityTypes?: Array<string> | null;
  }, failureCallback: (error: {
    readonly domain: string;
    readonly code: string;
    readonly userInfo?: object | null;
    readonly message: string;
  }) => void, successCallback: (completed: boolean, activityType?: string | null) => void) => void;
}
export default (TurboModuleRegistry.get<Spec>('ActionSheetManager') as Spec | undefined | null);