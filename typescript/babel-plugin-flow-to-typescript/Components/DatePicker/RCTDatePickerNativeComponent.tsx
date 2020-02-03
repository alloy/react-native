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

import { HostComponent } from '../../Renderer/shims/ReactNativeTypes';
import { ViewProps } from '../View/ViewPropTypes';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import * as React from 'react';
import { Float, WithDefault, BubblingEventHandler } from 'react-native/Libraries/Types/CodegenTypes';
type Event = Readonly<{
  timestamp: Float;
}>;
type NativeProps = Readonly<{
  date?: Float | null;
  initialDate?: Float | null;
  locale?: string | null;
  maximumDate?: Float | null;
  minimumDate?: Float | null;
  minuteInterval?: WithDefault<1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30, 1>;
  mode?: WithDefault<"date" | "time" | "datetime", "date">;
  onChange?: BubblingEventHandler<Event> | null;
  timeZoneOffsetInMinutes?: Float | null;
} & ViewProps>;
type ComponentType = HostComponent<NativeProps>;
interface NativeCommands {
  readonly setNativeDate: (viewRef: React.ElementRef<ComponentType>, date: Float) => void;
}
export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['setNativeDate']
});
export default (codegenNativeComponent<NativeProps>('DatePicker', {
  paperComponentName: 'RCTDatePicker',
  excludedPlatform: 'android'
}) as HostComponent<NativeProps>);