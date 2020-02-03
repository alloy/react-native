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

import { TurboModule } from '../RCTExport';
import * as TurboModuleRegistry from '../TurboModuleRegistry';
export interface Spec extends TurboModule {
  // Exported methods.
  readonly getConstants: () => {
    const1: boolean;
    const2: number;
    const3: string;
  };
  readonly voidFunc: () => void;
  readonly getBool: (arg: boolean) => boolean;
  readonly getNumber: (arg: number) => number;
  readonly getString: (arg: string) => string;
  readonly getArray: (arg: Array<any>) => Array<any>;
  readonly getObject: (arg: object) => object;
  readonly getValue: (x: number, y: string, z: object) => object;
  readonly getValueWithCallback: (callback: (value: string) => void) => void;
  readonly getValueWithPromise: (error: boolean) => Promise<string>;
}
export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule') as Spec);