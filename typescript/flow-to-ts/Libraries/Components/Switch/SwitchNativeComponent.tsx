'use strict';
import { $ReadOnly } from "utility-types";












import { BubblingEventHandler, WithDefault } from "../../Types/CodegenTypes";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
import * as React from "react";

import codegenNativeComponent from "../../Utilities/codegenNativeComponent";
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type SwitchChangeEvent = $ReadOnly<{
  value: boolean;
}>;

type NativeProps = $ReadOnly<ViewProps & {
  // Props
  disabled?: WithDefault<boolean, false>;
  value?: WithDefault<boolean, false>;
  tintColor?: ColorValue | null | undefined;
  onTintColor?: ColorValue | null | undefined;
  thumbTintColor?: ColorValue | null | undefined;
  // Deprecated props
  thumbColor?: ColorValue | null | undefined;
  trackColorForFalse?: ColorValue | null | undefined;
  trackColorForTrue?: ColorValue | null | undefined;
  // Events
  onChange?: BubblingEventHandler<SwitchChangeEvent> | null | undefined;
}>;

type ComponentType = HostComponent<NativeProps>;

interface NativeCommands {
  readonly setValue: ((viewRef: React.ElementRef<ComponentType>, value: boolean) => void);
}

export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['setValue']
});

export default (codegenNativeComponent<NativeProps>('Switch', {
  paperComponentName: 'RCTSwitch',
  excludedPlatform: 'android'
}) as ComponentType);
