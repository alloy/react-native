'use strict';;
import requireNativeComponent from '../../ReactNative/requireNativeComponent';
import { $ReadOnly } from "utility-types";












import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { SyntheticEvent } from "../../Types/CoreEventTypes";
import { TextStyleProp } from "../../StyleSheet/StyleSheet";
import codegenNativeCommands from "../../Utilities/codegenNativeCommands";
import * as React from "react";

type PickerIOSChangeEvent = React.SyntheticEvent<$ReadOnly<{
  newValue: number | string;
  newIndex: number;
}>>;

type RCTPickerIOSItemType = $ReadOnly<{
  label: Label | null | undefined;
  value: (number | string) | null | undefined;
  textColor: number | null | undefined;
}>;

type Label = Stringish | number;

type NativeProps = $ReadOnly<{
  items: ReadonlyArray<RCTPickerIOSItemType>;
  onChange: (event: PickerIOSChangeEvent) => void;
  selectedIndex: number;
  style?: TextStyleProp | null | undefined;
  testID?: string | null | undefined;
  accessibilityLabel?: string | null | undefined;
}>;

type ComponentType = HostComponent<NativeProps>;

interface NativeCommands {
  readonly setNativeSelectedIndex: (viewRef: React.ElementRef<ComponentType>, index: number) => void;
}

export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['setNativeSelectedIndex']
});

const RCTPickerNativeComponent: ComponentType = requireNativeComponent<NativeProps>('RCTPicker');

export default RCTPickerNativeComponent;
