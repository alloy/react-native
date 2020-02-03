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

import codegenNativeComponent from '../../Utilities/codegenNativeComponent';
import { HostComponent } from '../../Renderer/shims/ReactNativeTypes';
import { ViewProps } from '../View/ViewPropTypes';
import { BubblingEventHandler, WithDefault, Int32 } from '../../Types/CodegenTypes';
import { ColorValue } from '../../StyleSheet/StyleSheetTypes';
export type OnChangeEvent = Readonly<{
  value: Int32;
  selectedSegmentIndex: Int32;
}>;
type NativeProps = Readonly<{
  // Props
  values?: ReadonlyArray<string>;
  selectedIndex?: WithDefault<Int32, 0>;
  enabled?: WithDefault<boolean, true>;
  tintColor?: ColorValue | null;
  textColor?: ColorValue | null;
  backgroundColor?: ColorValue | null;
  momentary?: WithDefault<boolean, false>;
  // Events
  onChange?: BubblingEventHandler<OnChangeEvent> | null;
} & ViewProps>;
export default (codegenNativeComponent<NativeProps>('RCTSegmentedControl') as HostComponent<NativeProps>);