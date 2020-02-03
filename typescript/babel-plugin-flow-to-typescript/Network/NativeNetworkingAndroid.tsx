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
type Header = [string, string];
export interface Spec extends TurboModule {
  readonly sendRequest: (method: string, url: string, requestId: number, headers: Array<Header>, data: object, responseType: string, useIncrementalUpdates: boolean, timeout: number, withCredentials: boolean) => void;
  readonly abortRequest: (requestId: number) => void;
  readonly clearCookies: (callback: (result: boolean) => void) => void;
  // RCTEventEmitter
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}
export default (TurboModuleRegistry.getEnforcing<Spec>('Networking') as Spec);