'use strict';
import { $ReadOnly } from "utility-types";












import AndroidDropdownPickerNativeComponent, { Commands as AndroidDropdownPickerCommands } from "./AndroidDropdownPickerNativeComponent";
import AndroidDialogPickerNativeComponent, { Commands as AndroidDialogPickerCommands } from "./AndroidDialogPickerNativeComponent";
import * as React from "react";
import StyleSheet from "../../StyleSheet/StyleSheet";
import processColor from "../../StyleSheet/processColor";

import { SyntheticEvent } from "../../Types/CoreEventTypes";
import { TextStyleProp } from "../../StyleSheet/StyleSheet";

type PickerItemSelectSyntheticEvent = React.SyntheticEvent<$ReadOnly<{
  position: number;
}>>;

type PickerItemValue = number | string;

type Props = $ReadOnly<{
  accessibilityLabel?: Stringish | null | undefined;
  children?: React.ReactNode;
  style?: TextStyleProp | null | undefined;
  selectedValue?: PickerItemValue | null | undefined;
  enabled?: boolean | null | undefined;
  mode?: ("dialog" | "dropdown") | null | undefined;
  onValueChange?: ((itemValue: PickerItemValue | null | undefined, itemIndex: number) => unknown) | null | undefined;
  prompt?: string | null | undefined;
  testID?: string;
}>;

/**
 * Not exposed as a public API - use <Picker> instead.
 */
function PickerAndroid(props: Props): React.ReactNode {
  return null as any;
}

const styles = StyleSheet.create({
  pickerAndroid: {
    // The picker will conform to whatever width is given, but we do
    // have to set the component's height explicitly on the
    // surrounding view to ensure it gets rendered.
    // TODO would be better to export a native constant for this,
    // like in iOS the RCTDatePickerManager.m
    height: 50
  }
});

export default PickerAndroid;;
