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
    BLOB_URI_SCHEME: string | undefined | null;
    BLOB_URI_HOST: string | undefined | null;
  };
  readonly addNetworkingHandler: () => void;
  readonly addWebSocketHandler: (id: number) => void;
  readonly removeWebSocketHandler: (id: number) => void;
  readonly sendOverSocket: (blob: object, socketID: number) => void;
  readonly createFromParts: (parts: Array<object>, withId: string) => void;
  readonly release: (blobId: string) => void;
}
export default (TurboModuleRegistry.get<Spec>('BlobModule') as Spec | undefined | null);