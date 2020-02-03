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
  readonly readAsDataURL: (data: object) => Promise<string>;
  readonly readAsText: (data: object, encoding: string) => Promise<string>;
}
export default (TurboModuleRegistry.getEnforcing<Spec>('FileReaderModule') as Spec);