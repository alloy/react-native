'use strict';
import { $ReadOnly } from "utility-types";












import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";
import * as React from "react";
import { Float, WithDefault, BubblingEventHandler } from "react-native/Libraries/Types/CodegenTypes";

type Event = $ReadOnly<{
  timestamp: Float;
}>;

type NativeProps = $ReadOnly<ViewProps & {
  date?: Float | null | undefined;
  initialDate?: Float | null | undefined;
  locale?: string | null | undefined;
  maximumDate?: Float | null | undefined;
  minimumDate?: Float | null | undefined;
  minuteInterval?: WithDefault<1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30, 1>;
  mode?: WithDefault<"date" | "time" | "datetime", "date">;
  onChange?: BubblingEventHandler<Event> | null | undefined;
  timeZoneOffsetInMinutes?: Float | null | undefined;
}>;

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
