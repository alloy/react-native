import React from 'react';
import { $ReadOnly } from "utility-types";
import { PressEvent } from "../Types/CoreEventTypes";
declare type ButtonProps = $ReadOnly<{
    /**
     * Text to display inside the button
     */
    title: string;
    /**
     * Handler to be called when the user taps the button
     */
    onPress: ((event?: PressEvent) => unknown);
    /**
     * If true, doesn't play system sound on touch (Android Only)
     **/
    touchSoundDisabled?: boolean | null | undefined;
    /**
     * Color of the text (iOS), or background color of the button (Android)
     */
    color?: string | null | undefined;
    /**
     * TV preferred focus (see documentation for the View component).
     */
    hasTVPreferredFocus?: boolean | null | undefined;
    /**
     * TV next focus down (see documentation for the View component).
     *
     * @platform android
     */
    nextFocusDown?: number | null | undefined;
    /**
     * TV next focus forward (see documentation for the View component).
     *
     * @platform android
     */
    nextFocusForward?: number | null | undefined;
    /**
     * TV next focus left (see documentation for the View component).
     *
     * @platform android
     */
    nextFocusLeft?: number | null | undefined;
    /**
     * TV next focus right (see documentation for the View component).
     *
     * @platform android
     */
    nextFocusRight?: number | null | undefined;
    /**
     * TV next focus up (see documentation for the View component).
     *
     * @platform android
     */
    nextFocusUp?: number | null | undefined;
    /**
     * Text to display for blindness accessibility features
     */
    accessibilityLabel?: string | null | undefined;
    /**
     * If true, disable all interactions for this component.
     */
    disabled?: boolean | null | undefined;
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string | null | undefined;
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
declare class Button extends React.Component<ButtonProps> {
    render(): React.ReactNode;
}
export default Button;
