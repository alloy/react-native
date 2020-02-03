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
  readonly getConstants: () => {};
  readonly multiGet: (keys: Array<string>, callback: (errors?: Array<{
    message: string;
  }> | null, kvPairs?: Array<Array<string>> | null) => void) => void;
  readonly multiSet: (kvPairs: Array<Array<string>>, callback: (errors?: Array<{
    message: string;
  }> | null) => void) => void;
  readonly multiMerge: (kvPairs: Array<Array<string>>, callback: (errors?: Array<{
    message: string;
  }> | null) => void) => void;
  readonly multiRemove: (keys: Array<string>, callback: (errors?: Array<{
    message: string;
  }> | null) => void) => void;
  readonly clear: (callback: (error: {
    message: string;
  }) => void) => void;
  readonly getAllKeys: (callback: (error?: {
    message: string;
  } | null, allKeys?: Array<string> | null) => void) => void;
}
export default (TurboModuleRegistry.get<Spec>('AsyncSQLiteDBStorage') || TurboModuleRegistry.get<Spec>('AsyncLocalStorage') as Spec | undefined | null);