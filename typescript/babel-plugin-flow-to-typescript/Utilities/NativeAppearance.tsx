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

import { TurboModule } from '../TurboModule/RCTExport';
import * as TurboModuleRegistry from '../TurboModule/TurboModuleRegistry';
export type ColorSchemeName = "light" | "dark";
export type AppearancePreferences = {
  // TODO: (hramos) T52919652 Use ?ColorSchemeName once codegen supports union
  // types.

  /* 'light' | 'dark' */
  colorScheme?: string | null;
};
export interface Spec extends TurboModule {
  // TODO: (hramos) T52919652 Use ?ColorSchemeName once codegen supports union
  // types.

  /* 'light' | 'dark' */
  readonly getColorScheme: () => string | undefined | null;
  // RCTEventEmitter
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}
export default (TurboModuleRegistry.get<Spec>('Appearance') as Spec | undefined | null);