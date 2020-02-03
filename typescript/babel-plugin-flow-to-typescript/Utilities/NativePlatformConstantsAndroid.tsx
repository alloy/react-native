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
export interface Spec extends TurboModule {
  readonly getConstants: () => {
    isTesting: boolean;
    reactNativeVersion: {
      major: number;
      minor: number;
      patch: number;
      prerelease: number | undefined | null;
    };
    Version: number;
    Release: string;
    Serial: string;
    Fingerprint: string;
    Model: string;
    ServerHost?: string;
    uiMode: string;
  };
  readonly getAndroidID: () => string;
}
export default (TurboModuleRegistry.getEnforcing<Spec>('PlatformConstants') as Spec);