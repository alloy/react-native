'use strict';;
import PickerAndroid from './PickerAndroid';
import PickerIOS from './PickerIOS';
import Platform from '../../Utilities/Platform';
import React from 'react';
import UnimplementedView from '../UnimplementedViews/UnimplementedView';
import { $ReadOnly } from "utility-types";












import { TextStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";

const MODE_DIALOG = 'dialog';
const MODE_DROPDOWN = 'dropdown';

type PickerItemProps = $ReadOnly<{
  /**
   * Text to display for this item.
   */
  label: string;

  /**
   * The value to be passed to picker's `onValueChange` callback when
   * this item is selected. Can be a string or an integer.
   */
  value?: (number | string) | null | undefined;

  /**
   * Color of this item's text.
   * @platform android
   */
  color?: ColorValue;

  /**
   * Used to locate the item in end-to-end tests.
   */
  testID?: string;
}>;

/**
 * Individual selectable item in a Picker.
 */
export { PickerItem };
class PickerItem extends React.Component<PickerItemProps> {

  render() {
    // The items are not rendered directly
    throw null;
  }
}

type PickerProps = $ReadOnly<{
  children?: React.ReactNode;
  style?: TextStyleProp | null | undefined;

  /**
   * Value matching value of one of the items. Can be a string or an integer.
   */
  selectedValue?: (number | string) | null | undefined;

  /**
   * Callback for when an item is selected. This is called with the following parameters:
   *   - `itemValue`: the `value` prop of the item that was selected
   *   - `itemIndex`: the index of the selected item in this picker
   */
  onValueChange?: (itemValue: string | number, itemIndex: number) => unknown | null | undefined;

  /**
   * If set to false, the picker will be disabled, i.e. the user will not be able to make a
   * selection.
   * @platform android
   */
  enabled?: boolean | null | undefined;

  /**
   * On Android, specifies how to display the selection items when the user taps on the picker:
   *
   *   - 'dialog': Show a modal dialog. This is the default.
   *   - 'dropdown': Shows a dropdown anchored to the picker view
   *
   * @platform android
   */
  mode?: ("dialog" | "dropdown") | null | undefined;

  /**
   * Style to apply to each of the item labels.
   * @platform ios
   */
  itemStyle?: TextStyleProp | null | undefined;

  /**
   * Prompt string for this picker, used on Android in dialog mode as the title of the dialog.
   * @platform android
   */
  prompt?: string | null | undefined;

  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string | null | undefined;

  /**
   * The string used for the accessibility label. Will be read once focused on the picker but not on change.
   */
  accessibilityLabel?: string | null | undefined;
}>;

/**
 * Renders the native picker component on iOS and Android. Example:
 *
 *     <Picker
 *       selectedValue={this.state.language}
 *       onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
 *       <Picker.Item label="Java" value="java" />
 *       <Picker.Item label="JavaScript" value="js" />
 *     </Picker>
 */
class Picker extends React.Component<PickerProps> {
  /**
   * On Android, display the options in a dialog.
   */
  static MODE_DIALOG: $TEMPORARY$string<"dialog"> = MODE_DIALOG;

  /**
   * On Android, display the options in a dropdown (this is the default).
   */
  static MODE_DROPDOWN: $TEMPORARY$string<"dropdown"> = MODE_DROPDOWN;

  static Item: typeof PickerItem = PickerItem;

  static defaultProps: {mode: $TEMPORARY$string<"dialog">;} = {
    mode: MODE_DIALOG
  };

  render(): React.ReactNode {
    if (Platform.OS === 'ios') {
      /* $FlowFixMe(>=0.81.0 site=react_native_ios_fb) This suppression was
       * added when renaming suppression sites. */
      return <PickerIOS {...this.props}>{this.props.children}</PickerIOS>;
    } else if (Platform.OS === 'android') {
      return (
        /* $FlowFixMe(>=0.81.0 site=react_native_android_fb) This suppression
         * was added when renaming suppression sites. */
        <PickerAndroid {...this.props}>{this.props.children}</PickerAndroid>
      );
    } else {
      return <UnimplementedView />;
    }
  }
}

export default Picker;
