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

import { Float, WithDefault } from '../../Types/CodegenTypes';
import { ImageSource } from '../../Image/ImageSource';
import { ColorValue } from '../../StyleSheet/StyleSheetTypes';
import { ViewProps } from '../View/ViewPropTypes';
import codegenNativeComponent from '../../Utilities/codegenNativeComponent';
import { HostComponent } from '../../Renderer/shims/ReactNativeTypes';
type NativeProps = Readonly<{
  // Props
  progressViewStyle?: WithDefault<"default" | "bar", "default">;
  progress?: WithDefault<Float, 0>;
  progressTintColor?: ColorValue | null;
  trackTintColor?: ColorValue | null;
  progressImage?: ImageSource | null;
  trackImage?: ImageSource | null;
} & ViewProps>;
export default (codegenNativeComponent<NativeProps>('RCTProgressView') as HostComponent<NativeProps>);