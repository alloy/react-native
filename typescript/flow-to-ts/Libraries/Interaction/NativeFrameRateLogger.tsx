yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Interaction/NativeFrameRateLogger.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly setGlobalOptions: (options: {
    readonly debug?: boolean | null | undefined;
    readonly reportStackTraces?: boolean | null | undefined;
  }) => void;
  readonly setContext: (context: string) => void;
  readonly beginScroll: () => void;
  readonly endScroll: () => void;
}

export default (TurboModuleRegistry.get<Spec>('FrameRateLogger') as Spec | null | undefined);
Done in 0.50s.
