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
  readonly startRecordingFps: () => void;
  readonly stopRecordingFps: (animationStopTimeMs: number) => void;
}
export default (TurboModuleRegistry.get<Spec>('AnimationsDebugModule') as Spec | undefined | null);