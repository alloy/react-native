'use strict';
import { $ReadOnly } from "utility-types";












import { BubblingEventHandler, DirectEventHandler, Double, WithDefault } from "../../Types/CodegenTypes";

import codegenNativeComponent from "../../Utilities/codegenNativeComponent";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ImageSource } from "../../Image/ImageSource";
import { ViewProps } from "../View/ViewPropTypes";

type Event = $ReadOnly<{
  value: Double;
  fromUser?: boolean;
}>;

type NativeProps = $ReadOnly<ViewProps & {
  // Props
  disabled?: WithDefault<boolean, false>;
  enabled?: WithDefault<boolean, true>;
  maximumTrackImage?: ImageSource | null | undefined;
  maximumTrackTintColor?: ColorValue | null | undefined;
  maximumValue?: WithDefault<Double, 1>;
  minimumTrackImage?: ImageSource | null | undefined;
  minimumTrackTintColor?: ColorValue | null | undefined;
  minimumValue?: WithDefault<Double, 0>;
  step?: WithDefault<Double, 0>;
  testID?: WithDefault<string, "">;
  thumbImage?: ImageSource | null | undefined;
  thumbTintColor?: ColorValue | null | undefined;
  trackImage?: ImageSource | null | undefined;
  value?: WithDefault<Double, 0>;
  // Events
  onChange?: BubblingEventHandler<Event> | null | undefined;
  onValueChange?: BubblingEventHandler<Event, "paperValueChange"> | null | undefined;
  onSlidingComplete?: DirectEventHandler<Event, "paperSlidingComplete"> | null | undefined;
}>;

export default (codegenNativeComponent<NativeProps>('Slider', {
  interfaceOnly: true,
  paperComponentName: 'RCTSlider'
}) as HostComponent<NativeProps>);