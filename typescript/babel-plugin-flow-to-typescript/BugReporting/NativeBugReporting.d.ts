/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */
import { TurboModule } from '../TurboModule/RCTExport';
export interface Spec extends TurboModule {
    readonly startReportAProblemFlow: () => void;
    readonly setExtraData: (extraData: object, extraFiles: object) => void;
    readonly setCategoryID: (categoryID: string) => void;
}
declare const _default: Spec;
export default _default;
