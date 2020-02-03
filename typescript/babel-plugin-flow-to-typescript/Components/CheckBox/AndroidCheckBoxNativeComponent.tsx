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
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';

const requireNativeComponent = require('../../ReactNative/requireNativeComponent');

import { HostComponent } from '../../Renderer/shims/ReactNativeTypes';
import { ViewProps } from '../View/ViewPropTypes';
import { SyntheticEvent } from '../../Types/CoreEventTypes';
type CheckBoxEvent = SyntheticEvent<Readonly<{
  target: number;
  value: boolean;
}>>;
type NativeProps = Readonly<{
  /**
   * Used in case the props change removes the component.
   */
  onChange?: ((event: CheckBoxEvent) => unknown) | null;

  /**
   * Invoked with the new value when the value changes.
   */
  onValueChange?: ((value: boolean) => unknown) | null;

  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string | null;
  on?: boolean | null;
  enabled?: boolean;
  tintColors: {
    true: number | undefined | null;
    false: number | undefined | null;
  } | typeof undefined;
} & ViewProps>;
type NativeType = HostComponent<NativeProps>;
interface NativeCommands {
  readonly setNativeValue: (viewRef: React.ElementRef<NativeType>, value: boolean) => void;
}
export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['setNativeValue']
});
export default (requireNativeComponent<NativeProps>('AndroidCheckBox') as NativeType);