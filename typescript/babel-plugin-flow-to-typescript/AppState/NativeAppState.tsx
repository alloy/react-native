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
    initialAppState: string;
  };
  readonly getCurrentAppState: (success: (appState: {
    app_state: string;
  }) => void, error: (error: object) => void) => void;
  // Events
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}
export default (TurboModuleRegistry.getEnforcing<Spec>('AppState') as Spec);