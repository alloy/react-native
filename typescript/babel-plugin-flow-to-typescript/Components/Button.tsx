/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */
'use strict';

const Platform = require('../Utilities/Platform');

const React = require('react');

const StyleSheet = require('../StyleSheet/StyleSheet');

const Text = require('../Text/Text');

const TouchableNativeFeedback = require('./Touchable/TouchableNativeFeedback');

const TouchableOpacity = require('./Touchable/TouchableOpacity');

const View = require('./View/View');

const invariant = require('invariant');

import { PressEvent } from '../Types/CoreEventTypes';
type ButtonProps = Readonly<{
  /**
   * Text to display inside the button
   */
  title: string;

  /**
   * Handler to be called when the user taps the button
   */
  onPress: (event?: PressEvent) => unknown;

  /**
   * If true, doesn't play system sound on touch (Android Only)
   **/
  touchSoundDisabled?: boolean | null;

  /**
   * Color of the text (iOS), or background color of the button (Android)
   */
  color?: string | null;

  /**
   * TV preferred focus (see documentation for the View component).
   */
  hasTVPreferredFocus?: boolean | null;

  /**
   * TV next focus down (see documentation for the View component).
   *
   * @platform android
   */
  nextFocusDown?: number | null;

  /**
   * TV next focus forward (see documentation for the View component).
   *
   * @platform android
   */
  nextFocusForward?: number | null;

  /**
   * TV next focus left (see documentation for the View component).
   *
   * @platform android
   */
  nextFocusLeft?: number | null;

  /**
   * TV next focus right (see documentation for the View component).
   *
   * @platform android
   */
  nextFocusRight?: number | null;

  /**
   * TV next focus up (see documentation for the View component).
   *
   * @platform android
   */
  nextFocusUp?: number | null;

  /**
   * Text to display for blindness accessibility features
   */
  accessibilityLabel?: string | null;

  /**
   * If true, disable all interactions for this component.
   */
  disabled?: boolean | null;

  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string | null;
}>;
/**
 * A basic button component that should render nicely on any platform. Supports
 * a minimal level of customization.
 *
 * <center><img src="img/buttonExample.png"></img></center>
 *
 * If this button doesn't look right for your app, you can build your own
 * button using [TouchableOpacity](docs/touchableopacity.html)
 * or [TouchableNativeFeedback](docs/touchablenativefeedback.html).
 * For inspiration, look at the [source code for this button component](https://github.com/facebook/react-native/blob/master/Libraries/Components/Button.js).
 * Or, take a look at the [wide variety of button components built by the community](https://js.coach/react-native?search=button).
 *
 * Example usage:
 *
 * ```
 * import { Button } from 'react-native';
 * ...
 *
 * <Button
 *   onPress={onPressLearnMore}
 *   title="Learn More"
 *   color="#841584"
 *   accessibilityLabel="Learn more about this purple button"
 * />
 * ```
 *
 */

class Button extends React.Component<ButtonProps> {
  render(): React.Node {
    const {
      accessibilityLabel,
      color,
      onPress,
      touchSoundDisabled,
      title,
      hasTVPreferredFocus,
      nextFocusDown,
      nextFocusForward,
      nextFocusLeft,
      nextFocusRight,
      nextFocusUp,
      disabled,
      testID
    } = this.props;
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if (color) {
      if (Platform.OS === 'ios') {
        textStyles.push({
          color: color
        });
      } else {
        buttonStyles.push({
          backgroundColor: color
        });
      }
    }

    const accessibilityState = {};

    if (disabled) {
      buttonStyles.push(styles.buttonDisabled);
      textStyles.push(styles.textDisabled);
      accessibilityState.disabled = true;
    }

    invariant(typeof title === 'string', 'The title prop of a Button must be a string');
    const formattedTitle = Platform.OS === 'android' ? title.toUpperCase() : title;
    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return <Touchable accessibilityLabel={accessibilityLabel} accessibilityRole="button" accessibilityState={accessibilityState} hasTVPreferredFocus={hasTVPreferredFocus} nextFocusDown={nextFocusDown} nextFocusForward={nextFocusForward} nextFocusLeft={nextFocusLeft} nextFocusRight={nextFocusRight} nextFocusUp={nextFocusUp} testID={testID} disabled={disabled} onPress={onPress} touchSoundDisabled={touchSoundDisabled}>
        <View style={buttonStyles}>
          <Text style={textStyles} disabled={disabled}>
            {formattedTitle}
          </Text>
        </View>
      </Touchable>;
  }

}

const styles = StyleSheet.create({
  button: Platform.select({
    ios: {},
    android: {
      elevation: 4,
      // Material design blue from https://material.google.com/style/color.html#color-color-palette
      backgroundColor: '#2196F3',
      borderRadius: 2
    }
  }),
  text: {
    textAlign: 'center',
    margin: 8,
    ...Platform.select({
      ios: {
        // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
        color: '#007AFF',
        fontSize: 18
      },
      android: {
        color: 'white',
        fontWeight: '500'
      }
    })
  },
  buttonDisabled: Platform.select({
    ios: {},
    android: {
      elevation: 0,
      backgroundColor: '#dfdfdf'
    }
  }),
  textDisabled: Platform.select({
    ios: {
      color: '#cdcdcd'
    },
    android: {
      color: '#a1a1a1'
    }
  })
});
module.exports = Button;