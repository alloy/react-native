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

import { BubblingEventHandler, WithDefault } from '../../Types/CodegenTypes';
import { ColorValue } from '../../StyleSheet/StyleSheetTypes';
import { ViewProps } from '../View/ViewPropTypes';
import * as React from 'react';
import codegenNativeComponent from '../../Utilities/codegenNativeComponent';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import { HostComponent } from '../../Renderer/shims/ReactNativeTypes';
type SwitchChangeEvent = Readonly<{
  value: boolean;
}>;
type NativeProps = Readonly<{
  // Props
  disabled?: WithDefault<boolean, false>;
  value?: WithDefault<boolean, false>;
  tintColor?: ColorValue | null;
  onTintColor?: ColorValue | null;
  thumbTintColor?: ColorValue | null;
  // Deprecated props
  thumbColor?: ColorValue | null;
  trackColorForFalse?: ColorValue | null;
  trackColorForTrue?: ColorValue | null;
  // Events
  onChange?: BubblingEventHandler<SwitchChangeEvent> | null;
} & ViewProps>;
type ComponentType = HostComponent<NativeProps>;
interface NativeCommands {
  readonly setValue: (viewRef: React.ElementRef<ComponentType>, value: boolean) => void;
}
export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['setValue']
});
export default (codegenNativeComponent<NativeProps>('Switch', {
  paperComponentName: 'RCTSwitch',
  excludedPlatform: 'android'
}) as ComponentType);