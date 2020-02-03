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
  readonly getConstants: () => {
    ERROR_CODE_EXCEPTION: number;
    ERROR_CODE_VIEW_NOT_FOUND: number;
  };
  readonly onSuccess: (data: string) => void;
  readonly onFailure: (errorCode: number, error: string) => void;
}
export default (TurboModuleRegistry.get<Spec>('JSDevSupport') as Spec | undefined | null);