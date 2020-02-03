'use strict';
import { $ReadOnly } from "utility-types";












const React = require('react');
const StyleSheet = require('../../StyleSheet/StyleSheet');
const TouchableWithoutFeedback = require('../../Components/Touchable/TouchableWithoutFeedback');
const View = require('../../Components/View/View');
const YellowBoxStyle = require('./YellowBoxStyle');

import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { PressEvent } from "../../Types/CoreEventTypes";

type Props = $ReadOnly<{
  backgroundColor: $ReadOnly<{
    default: string;
    pressed: string;
  }>;
  children?: React.ReactNode;
  hitSlop?: EdgeInsetsProp | null | undefined;
  onPress?: (event: PressEvent) => void | null | undefined;
  style?: ViewStyleProp;
}>;

type State = {
  pressed: boolean;
};

class YellowBoxPressable extends React.Component<Props, State> {

  static defaultProps: {
    backgroundColor: {default: string;pressed: string;};
  } = {
    backgroundColor: {
      default: YellowBoxStyle.getBackgroundColor(0.95),
      pressed: YellowBoxStyle.getHighlightColor(1)
    }
  };

  state: State = {
    pressed: false
  };

  render(): React.ReactNode {
    const content = <View style={StyleSheet.compose({
      backgroundColor: this.state.pressed ? this.props.backgroundColor.pressed : this.props.backgroundColor.default
    }, this.props.style)}>
        {this.props.children}
      </View>;
    return this.props.onPress == null ? content : <TouchableWithoutFeedback hitSlop={this.props.hitSlop} onPress={this.props.onPress} onPressIn={this._handlePressIn} onPressOut={this._handlePressOut}>
        {content}
      </TouchableWithoutFeedback>;
  }

  _handlePressIn = () => {
    this.setState({ pressed: true });
  };

  _handlePressOut = () => {
    this.setState({ pressed: false });
  };
}

module.exports = YellowBoxPressable;