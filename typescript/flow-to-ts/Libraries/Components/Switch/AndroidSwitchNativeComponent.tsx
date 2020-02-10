'use strict';
import { $ReadOnly } from "utility-types";












import * as React from "react";

import { WithDefault, BubblingEventHandler } from "react-native/Libraries/Types/CodegenTypes";

import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";
import { HostComponent } from "react-native/Libraries/Renderer/shims/ReactNativeTypes";

import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";

type SwitchChangeEvent = $ReadOnly<{
  value: boolean;
}>;

type NativeProps = $ReadOnly<ViewProps & {
  // Props
  disabled?: WithDefault<boolean, false>;
  enabled?: WithDefault<boolean, true>;
  thumbColor?: ColorValue | null | undefined;
  trackColorForFalse?: ColorValue | null | undefined;
  trackColorForTrue?: ColorValue | null | undefined;
  value?: WithDefault<boolean, false>;
  on?: WithDefault<boolean, false>;
  thumbTintColor?: ColorValue | null | undefined;
  trackTintColor?: ColorValue | null | undefined;
  // Events
  onChange?: BubblingEventHandler<SwitchChangeEvent>;
}>;

type NativeType = HostComponent<NativeProps>;

interface NativeCommands {
  readonly setNativeValue: ((viewRef: React.ElementRef<NativeType>, value: boolean) => void);
}

export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['setNativeValue']
});

export default (codegenNativeComponent<NativeProps>('AndroidSwitch', {
  interfaceOnly: true
}) as NativeType);
