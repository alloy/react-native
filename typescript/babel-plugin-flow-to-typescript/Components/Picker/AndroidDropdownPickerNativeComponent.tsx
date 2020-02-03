/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */
'use strict';

import * as React from 'react';
import codegenNativeCommands from '../../Utilities/codegenNativeCommands';
import requireNativeComponent from '../../ReactNative/requireNativeComponent';
import { DirectEventHandler, Int32, WithDefault } from '../../Types/CodegenTypes';
import { HostComponent } from '../../Renderer/shims/ReactNativeTypes';
import { TextStyleProp } from '../../StyleSheet/StyleSheet';
import { ColorValue } from '../../StyleSheet/StyleSheetTypes';
import { ViewProps } from '../../Components/View/ViewPropTypes';
type PickerItem = Readonly<{
  label: string;
  color?: Int32 | null;
}>;
type PickerItemSelectEvent = Readonly<{
  position: Int32;
}>;
type NativeProps = Readonly<{
  style?: TextStyleProp | null;
  // Props
  color?: ColorValue | null;
  enabled?: WithDefault<boolean, true>;
  items: ReadonlyArray<PickerItem>;
  prompt?: WithDefault<string, "">;
  selected: Int32;
  // Events
  onSelect?: DirectEventHandler<PickerItemSelectEvent>;
} & ViewProps>;
type NativeType = HostComponent<NativeProps>;
interface NativeCommands {
  readonly setNativeSelectedPosition: (viewRef: React.ElementRef<NativeType>, index: number) => void;
}
export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['setNativeSelectedPosition']
});
export default (requireNativeComponent<NativeProps>('AndroidDropdownPicker') as NativeType);