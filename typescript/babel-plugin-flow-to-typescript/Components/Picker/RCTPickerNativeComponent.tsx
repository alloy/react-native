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

const requireNativeComponent = require('../../ReactNative/requireNativeComponent');

import { HostComponent } from '../../Renderer/shims/ReactNativeTypes';
import { SyntheticEvent } from '../../Types/CoreEventTypes';
import { TextStyleProp } from '../../StyleSheet/StyleSheet';
import codegenNativeCommands from '../../Utilities/codegenNativeCommands';
import * as React from 'react';
type PickerIOSChangeEvent = SyntheticEvent<Readonly<{
  newValue: number | string;
  newIndex: number;
}>>;
type RCTPickerIOSItemType = Readonly<{
  label: Label | undefined | null;
  value: (number | string) | undefined | null;
  textColor: number | undefined | null;
}>;
type Label = Stringish | number;
type NativeProps = Readonly<{
  items: ReadonlyArray<RCTPickerIOSItemType>;
  onChange: (event: PickerIOSChangeEvent) => void;
  selectedIndex: number;
  style?: TextStyleProp | null;
  testID?: string | null;
  accessibilityLabel?: string | null;
}>;
type ComponentType = HostComponent<NativeProps>;
interface NativeCommands {
  readonly setNativeSelectedIndex: (viewRef: React.ElementRef<ComponentType>, index: number) => void;
}
export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['setNativeSelectedIndex']
});
const RCTPickerNativeComponent: ComponentType = requireNativeComponent<NativeProps>('RCTPicker');
export default RCTPickerNativeComponent;