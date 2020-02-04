'use strict';
import { $ReadOnly } from "utility-types";












const React = require('react');
const StyleSheet = require('../../StyleSheet/StyleSheet');
const processColor = require('../../StyleSheet/processColor');

const nullthrows = require('nullthrows');
const setAndForwardRef = require('../../Utilities/setAndForwardRef');

import AndroidCheckBoxNativeComponent, { Commands as AndroidCheckBoxCommands } from "./AndroidCheckBoxNativeComponent";

import { ViewProps } from "../View/ViewPropTypes";
import { SyntheticEvent } from "../../Types/CoreEventTypes";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";

type CheckBoxEvent = React.SyntheticEvent<$ReadOnly<{
  target: number;
  value: boolean;
}>>;

type CommonProps = $ReadOnly<ViewProps & {
  /**
   * Used in case the props change removes the component.
   */
  onChange?: (event: CheckBoxEvent) => unknown | null | undefined;

  /**
   * Invoked with the new value when the value changes.
   */
  onValueChange?: (value: boolean) => unknown | null | undefined;

  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string | null | undefined;
}>;

type Props = $ReadOnly<CommonProps & {
  /**
   * The value of the checkbox.  If true the checkbox will be turned on.
   * Default value is false.
   */
  value?: boolean | null | undefined;

  /**
   * If true the user won't be able to toggle the checkbox.
   * Default value is false.
   */
  disabled?: boolean | null | undefined;

  /**
   * Used to get the ref for the native checkbox
   */
  forwardedRef?: React.Ref<typeof AndroidCheckBoxNativeComponent> | null | undefined;

  /**
   * Controls the colors the checkbox has in checked and unchecked states.
   */
  tintColors?: {true?: ColorValue | null | undefined;false?: ColorValue | null | undefined;};
}>;

/**
 * Renders a boolean input (Android only).
 *
 * This is a controlled component that requires an `onValueChange` callback that
 * updates the `value` prop in order for the component to reflect user actions.
 * If the `value` prop is not updated, the component will continue to render
 * the supplied `value` prop instead of the expected result of any user actions.
 *
 * ```
 * import React from 'react';
 * import { AppRegistry, StyleSheet, Text, View, CheckBox } from 'react-native';
 *
 * export default class App extends React.Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       checked: false
 *     }
 *   }
 *
 *   toggle() {
 *     this.setState(({checked}) => {
 *       return {
 *         checked: !checked
 *       };
 *     });
 *   }
 *
 *   render() {
 *     const {checked} = this.state;
 *     return (
 *       <View style={styles.container}>
 *         <Text>Checked</Text>
 *         <CheckBox value={checked} onChange={this.toggle.bind(this)} />
 *       </View>
 *     );
 *   }
 * }
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     flexDirection: 'row',
 *     alignItems: 'center',
 *     justifyContent: 'center',
 *   },
 * });
 *
 * // skip this line if using Create React Native App
 * AppRegistry.registerComponent('App', () => App);
 * ```
 *
 * @keyword checkbox
 * @keyword toggle
 */
class CheckBox extends React.Component<Props> {

  _nativeRef: React.ElementRef<typeof AndroidCheckBoxNativeComponent> | null | undefined = null;
  _setNativeRef = setAndForwardRef({
    getForwardedRef: () => this.props.forwardedRef,
    setLocalRef: ref => {
      this._nativeRef = ref;
    }
  });

  _onChange = (event: CheckBoxEvent) => {
    const value = this.props.value ?? false;
    AndroidCheckBoxCommands.setNativeValue(nullthrows(this._nativeRef), value);
    // Change the props after the native props are set in case the props
    // change removes the component
    this.props.onChange && this.props.onChange(event);
    this.props.onValueChange && this.props.onValueChange(event.nativeEvent.value);
  };

  _getTintColors(tintColors) {
    return tintColors ? {
      true: processColor(tintColors.true),
      false: processColor(tintColors.false)
    } : undefined;
  }

  render() {
    const {
      disabled: _,
      value: __,
      tintColors,
      style,
      forwardedRef,
      ...props
    } = this.props;
    const disabled = this.props.disabled ?? false;
    const value = this.props.value ?? false;

    const nativeProps = {
      ...props,
      onStartShouldSetResponder: () => true,
      onResponderTerminationRequest: () => false,
      enabled: !disabled,
      on: value,
      tintColors: this._getTintColors(tintColors),
      style: [styles.rctCheckBox, style]
    };
    return <AndroidCheckBoxNativeComponent {...nativeProps} ref={this._setNativeRef} onChange={this._onChange} />;
  }
}

const styles = StyleSheet.create({
  rctCheckBox: {
    height: 32,
    width: 32
  }
});

type CheckBoxType = React.AbstractComponent<Props, React.ElementRef<typeof AndroidCheckBoxNativeComponent>>;

const CheckBoxWithRef = React.forwardRef<Props, React.ElementRef<typeof AndroidCheckBoxNativeComponent>>(function CheckBoxWithRef(props, ref) {
  return <CheckBox {...props} forwardedRef={ref} />;
});

module.exports = (CheckBoxWithRef as CheckBoxType);
