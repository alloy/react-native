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
  readonly getConstants: () => {
    SHORT: number;
    LONG: number;
    TOP: number;
    BOTTOM: number;
    CENTER: number;
  };
  readonly show: (message: string, duration: number) => void;
  readonly showWithGravity: (message: string, duration: number, gravity: number) => void;
  readonly showWithGravityAndOffset: (message: string, duration: number, gravity: number, xOffset: number, yOffset: number) => void;
}
export default (TurboModuleRegistry.getEnforcing<Spec>('ToastAndroid') as Spec);