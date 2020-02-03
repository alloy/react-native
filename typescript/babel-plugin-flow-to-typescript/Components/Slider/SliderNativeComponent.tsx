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

import { BubblingEventHandler, DirectEventHandler, Double, WithDefault } from '../../Types/CodegenTypes';
import codegenNativeComponent from '../../Utilities/codegenNativeComponent';
import { HostComponent } from '../../Renderer/shims/ReactNativeTypes';
import { ColorValue } from '../../StyleSheet/StyleSheetTypes';
import { ImageSource } from '../../Image/ImageSource';
import { ViewProps } from '../View/ViewPropTypes';
type Event = Readonly<{
  value: Double;
  fromUser?: boolean;
}>;
type NativeProps = Readonly<{
  // Props
  disabled?: WithDefault<boolean, false>;
  enabled?: WithDefault<boolean, true>;
  maximumTrackImage?: ImageSource | null;
  maximumTrackTintColor?: ColorValue | null;
  maximumValue?: WithDefault<Double, 1>;
  minimumTrackImage?: ImageSource | null;
  minimumTrackTintColor?: ColorValue | null;
  minimumValue?: WithDefault<Double, 0>;
  step?: WithDefault<Double, 0>;
  testID?: WithDefault<string, "">;
  thumbImage?: ImageSource | null;
  thumbTintColor?: ColorValue | null;
  trackImage?: ImageSource | null;
  value?: WithDefault<Double, 0>;
  // Events
  onChange?: BubblingEventHandler<Event> | null;
  onValueChange?: BubblingEventHandler<Event, "paperValueChange"> | null;
  onSlidingComplete?: DirectEventHandler<Event, "paperSlidingComplete"> | null;
} & ViewProps>;
export default (codegenNativeComponent<NativeProps>('Slider', {
  interfaceOnly: true,
  paperComponentName: 'RCTSlider'
}) as HostComponent<NativeProps>);