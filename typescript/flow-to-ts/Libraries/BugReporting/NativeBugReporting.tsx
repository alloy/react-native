yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/BugReporting/NativeBugReporting.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly startReportAProblemFlow: () => void;
  readonly setExtraData: (extraData: Object, extraFiles: Object) => void;
  readonly setCategoryID: (categoryID: string) => void;
}

export default (TurboModuleRegistry.get<Spec>('BugReporting') as Spec | null | undefined);
Done in 0.51s.
