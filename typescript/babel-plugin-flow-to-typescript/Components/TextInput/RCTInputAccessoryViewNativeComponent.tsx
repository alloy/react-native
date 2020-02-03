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

import { ColorValue } from '../../StyleSheet/StyleSheetTypes';
import { ViewProps } from '../View/ViewPropTypes';
import codegenNativeComponent from '../../Utilities/codegenNativeComponent';
import { HostComponent } from '../../Renderer/shims/ReactNativeTypes';
type NativeProps = Readonly<{
  backgroundColor?: ColorValue | null;
} & ViewProps>;
export default (codegenNativeComponent<NativeProps>('RCTInputAccessoryView') as HostComponent<NativeProps>);