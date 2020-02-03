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

import * as React from 'react';
import { WithDefault, BubblingEventHandler } from 'react-native/Libraries/Types/CodegenTypes';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import { HostComponent } from 'react-native/Libraries/Renderer/shims/ReactNativeTypes';
import { ColorValue } from '../../StyleSheet/StyleSheetTypes';
import { ViewProps } from '../View/ViewPropTypes';
type SwitchChangeEvent = Readonly<{
  value: boolean;
}>;
type NativeProps = Readonly<{
  // Props
  disabled?: WithDefault<boolean, false>;
  enabled?: WithDefault<boolean, true>;
  thumbColor?: ColorValue | null;
  trackColorForFalse?: ColorValue | null;
  trackColorForTrue?: ColorValue | null;
  value?: WithDefault<boolean, false>;
  on?: WithDefault<boolean, false>;
  thumbTintColor?: ColorValue | null;
  trackTintColor?: ColorValue | null;
  // Events
  onChange?: BubblingEventHandler<SwitchChangeEvent>;
} & ViewProps>;
type NativeType = HostComponent<NativeProps>;
interface NativeCommands {
  readonly setNativeValue: (viewRef: React.ElementRef<NativeType>, value: boolean) => void;
}
export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['setNativeValue']
});
export default (codegenNativeComponent<NativeProps>('AndroidSwitch', {
  interfaceOnly: true
}) as NativeType);