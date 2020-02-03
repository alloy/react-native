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
    settings: object;
  };
  readonly setValues: (values: object) => void;
  readonly deleteValues: (values: Array<string>) => void;
}
export default (TurboModuleRegistry.getEnforcing<Spec>('SettingsManager') as Spec);