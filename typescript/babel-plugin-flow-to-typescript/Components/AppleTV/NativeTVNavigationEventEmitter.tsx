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
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}
export default (TurboModuleRegistry.get<Spec>('TVNavigationEventEmitter') as Spec | undefined | null);