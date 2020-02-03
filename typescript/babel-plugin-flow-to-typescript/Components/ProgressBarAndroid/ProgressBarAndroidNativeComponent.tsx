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
import { Double, WithDefault } from '../../Types/CodegenTypes';
import codegenNativeComponent from '../../Utilities/codegenNativeComponent';
import { HostComponent } from '../../Renderer/shims/ReactNativeTypes';
type NativeProps = Readonly<{
  //Props
  styleAttr?: string;
  typeAttr?: string;
  indeterminate: boolean;
  progress?: WithDefault<Double, 0>;
  animating?: WithDefault<boolean, true>;
  color?: ColorValue | null;
  testID?: WithDefault<string, "">;
} & ViewProps>;
export default (codegenNativeComponent<NativeProps>('AndroidProgressBar') as HostComponent<NativeProps>);