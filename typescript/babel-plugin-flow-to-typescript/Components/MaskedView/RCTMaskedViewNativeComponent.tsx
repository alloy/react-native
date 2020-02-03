/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */
import { ViewProps } from '../View/ViewPropTypes';
import codegenNativeComponent from '../../Utilities/codegenNativeComponent';
import { HostComponent } from '../../Renderer/shims/ReactNativeTypes';
type NativeProps = Readonly<{} & ViewProps>;
export default (codegenNativeComponent<NativeProps>('RCTMaskedView') as HostComponent<NativeProps>);