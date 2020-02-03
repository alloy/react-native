/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */
'use strict';

import { TurboModule } from '../../TurboModule/RCTExport';
import * as TurboModuleRegistry from '../../TurboModule/TurboModuleRegistry';
export interface Spec extends TurboModule {
  readonly fetchSegment: (segmentId: number, options: object, // flowlint-line unclear-type: off
  callback: (error?: object | null) => void) => // flowlint-line unclear-type: off
  void;
  readonly getSegment?: (segmentId: number, options: object, // flowlint-line unclear-type: off
  callback: (error?: object | null, path?: string | null) => void) => // flowlint-line unclear-type: off
  void;
}
export default (TurboModuleRegistry.getEnforcing<Spec>('SegmentFetcher') as Spec);