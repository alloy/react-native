'use strict';
import { $ReadOnly } from "utility-types";












import * as React from "react";

import codegenNativeCommands from "../../Utilities/codegenNativeCommands";
import requireNativeComponent from "../../ReactNative/requireNativeComponent";

import { DirectEventHandler, Int32, WithDefault } from "../../Types/CodegenTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { TextStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../../Components/View/ViewPropTypes";

type PickerItem = $ReadOnly<{
  label: string;
  color?: Int32 | null | undefined;
}>;

type PickerItemSelectEvent = $ReadOnly<{
  position: Int32;
}>;

type NativeProps = $ReadOnly<ViewProps & {
  style?: TextStyleProp | null | undefined;
  // Props
  color?: ColorValue | null | undefined;
  enabled?: WithDefault<boolean, true>;
  items: ReadonlyArray<PickerItem>;
  prompt?: WithDefault<string, "">;
  selected: Int32;
  // Events
  onSelect?: DirectEventHandler<PickerItemSelectEvent>;
}>;

type NativeType = HostComponent<NativeProps>;

interface NativeCommands {
  readonly setNativeSelectedPosition: ((viewRef: React.ElementRef<NativeType>, index: number) => void);
}

export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['setNativeSelectedPosition']
});

export default (requireNativeComponent<NativeProps>('AndroidDropdownPicker') as NativeType);
