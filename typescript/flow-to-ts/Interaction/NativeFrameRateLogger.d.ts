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
export interface Spec extends TurboModule {
    readonly setGlobalOptions: (options: {
        readonly debug?: boolean | null | undefined;
        readonly reportStackTraces?: boolean | null | undefined;
    }) => void;
    readonly setContext: (context: string) => void;
    readonly beginScroll: () => void;
    readonly endScroll: () => void;
}
declare const _default: Spec;
export default _default;
