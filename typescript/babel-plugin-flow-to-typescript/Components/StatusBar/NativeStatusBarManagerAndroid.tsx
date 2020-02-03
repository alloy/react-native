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
    readonly HEIGHT: number;
    readonly DEFAULT_BACKGROUND_COLOR: number;
  };
  readonly setColor: (color: number, animated: boolean) => void;
  readonly setTranslucent: (translucent: boolean) => void;

  /**
   *  - statusBarStyles can be:
   *    - 'default'
   *    - 'dark-content'
   */
  readonly setStyle: (statusBarStyle?: string | null) => void;
  readonly setHidden: (hidden: boolean) => void;
}
export default (TurboModuleRegistry.getEnforcing<Spec>('StatusBarManager') as Spec);