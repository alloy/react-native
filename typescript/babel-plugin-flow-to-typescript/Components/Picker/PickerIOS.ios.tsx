/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */
// This is a controlled component version of RCTPickerIOS.
'use strict';

const React = require('react');

const StyleSheet = require('../../StyleSheet/StyleSheet');

const View = require('../View/View');

const processColor = require('../../StyleSheet/processColor');

import RCTPickerNativeComponent, { Commands as PickerCommands } from './RCTPickerNativeComponent';
import { TextStyleProp } from '../../StyleSheet/StyleSheet';
import { ColorValue } from '../../StyleSheet/StyleSheetTypes';
import { SyntheticEvent } from '../../Types/CoreEventTypes';
import { ViewProps } from '../View/ViewPropTypes';
type PickerIOSChangeEvent = SyntheticEvent<Readonly<{
  newValue: number | string;
  newIndex: number;
}>>;
type RCTPickerIOSItemType = Readonly<{
  label: Label | undefined | null;
  value: (number | string) | undefined | null;
  textColor: number | undefined | null;
}>;
type Label = Stringish | number;
type Props = Readonly<{
  children: React.ChildrenArray<React.Element<typeof PickerIOSItem>>;
  itemStyle?: TextStyleProp | null;
  onChange?: ((event: PickerIOSChangeEvent) => unknown) | null;
  onValueChange?: ((itemValue: string | number, itemIndex: number) => unknown) | null;
  selectedValue: (number | string) | undefined | null;
  accessibilityLabel?: string | null;
} & ViewProps>;
type State = {
  selectedIndex: number;
  items: ReadonlyArray<RCTPickerIOSItemType>;
};
type ItemProps = Readonly<{
  label: Label | undefined | null;
  value?: (number | string) | null;
  color?: ColorValue | null;
}>;

const PickerIOSItem = (props: ItemProps): null => {
  return null;
};

class PickerIOS extends React.Component<Props, State> {
  _picker: React.ElementRef<typeof RCTPickerNativeComponent> | undefined | null = null;
  _lastNativeValue: number | undefined | null;
  state: State = {
    selectedIndex: 0,
    items: []
  };
  static Item: (props: ItemProps) => null = PickerIOSItem;

  static getDerivedStateFromProps(props: Props): State {
    let selectedIndex = 0;
    const items = [];
    React.Children.toArray(props.children).filter(child => child !== null).forEach(function (child, index) {
      if (child.props.value === props.selectedValue) {
        selectedIndex = index;
      }

      items.push({
        value: child.props.value,
        label: child.props.label,
        textColor: processColor(child.props.color)
      });
    });
    return {
      selectedIndex,
      items
    };
  }

  render(): React.Node {
    return <View style={this.props.style}>
        <RCTPickerNativeComponent ref={picker => {
        this._picker = picker;
      }} testID={this.props.testID} style={[styles.pickerIOS, this.props.itemStyle]} items={this.state.items} selectedIndex={this.state.selectedIndex} onChange={this._onChange} accessibilityLabel={this.props.accessibilityLabel} />
      </View>;
  }

  componentDidUpdate() {
    // This is necessary in case native updates the picker and JS decides
    // that the update should be ignored and we should stick with the value
    // that we have in JS.
    if (this._picker && this._lastNativeValue !== undefined && this._lastNativeValue !== this.state.selectedIndex) {
      PickerCommands.setNativeSelectedIndex(this._picker, this.state.selectedIndex);
    }
  }

  _onChange = event => {
    if (this.props.onChange) {
      this.props.onChange(event);
    }

    if (this.props.onValueChange) {
      this.props.onValueChange(event.nativeEvent.newValue, event.nativeEvent.newIndex);
    }

    this._lastNativeValue = event.nativeEvent.newIndex;
    this.forceUpdate();
  };
}

const styles = StyleSheet.create({
  pickerIOS: {
    // The picker will conform to whatever width is given, but we do
    // have to set the component's height explicitly on the
    // surrounding view to ensure it gets rendered.
    height: 216
  }
});
module.exports = PickerIOS;