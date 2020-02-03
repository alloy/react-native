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
  readonly isReduceMotionEnabled: (onSuccess: (isReduceMotionEnabled: boolean) => void) => void;
  readonly isTouchExplorationEnabled: (onSuccess: (isScreenReaderEnabled: boolean) => void) => void;
  readonly setAccessibilityFocus: (reactTag: number) => void;
  readonly announceForAccessibility: (announcement: string) => void;
}
export default (TurboModuleRegistry.get<Spec>('AccessibilityInfo') as Spec | undefined | null);