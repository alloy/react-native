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
  readonly abortRequest: (requestId: number) => void;
  readonly getConstants: () => {};
  readonly getSize: (uri: string) => Promise<Readonly<{
    width: number;
    height: number;
  }>>;
  readonly getSizeWithHeaders: (uri: string, headers: object) => Promise<{
    width: number;
    height: number;
  }>;
  readonly prefetchImage: (uri: string, requestId: number) => Promise<boolean>;
  readonly queryCache: (uris: Array<string>) => Promise<object>;
}
export default (TurboModuleRegistry.getEnforcing<Spec>('ImageLoader') as Spec);