yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/MaskedView/RCTMaskedViewNativeComponent.js
import { $ReadOnly } from "utility-types";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

import { ViewProps } from "../View/ViewPropTypes";
import codegenNativeComponent from "../../Utilities/codegenNativeComponent";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type NativeProps = $ReadOnly<ViewProps>;

export default (codegenNativeComponent<NativeProps>('RCTMaskedView') as HostComponent<NativeProps>);
Done in 0.54s.
