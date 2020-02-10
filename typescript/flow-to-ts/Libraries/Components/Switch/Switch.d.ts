import React from 'react';
import { $ReadOnly } from "utility-types";
import AndroidSwitchNativeComponent from "./AndroidSwitchNativeComponent";
import SwitchNativeComponent from "./SwitchNativeComponent";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type SwitchChangeEvent = React.SyntheticEvent<$ReadOnly<{
    value: boolean;
}>>;
export declare type Props = $ReadOnly<ViewProps & {
    /**
     * Whether the switch is disabled. Defaults to false.
     */
    disabled?: boolean | null | undefined;
    /**
     * Boolean value of the switch. Defaults to false.
     */
    value?: boolean | null | undefined;
    /**
     * Custom color for the switch thumb.
     */
    thumbColor?: ColorValue | null | undefined;
    /**
     * Custom colors for the switch track.
     *
     * NOTE: On iOS when the switch value is false, the track shrinks into the
     * border. If you want to change the color of the background exposed by the
     * shrunken track, use `ios_backgroundColor`.
     */
    trackColor?: $ReadOnly<{
        false?: ColorValue | null | undefined;
        true?: ColorValue | null | undefined;
    }> | null | undefined;
    /**
     * On iOS, custom color for the background. This background color can be seen
     * either when the switch value is false or when the switch is disabled (and
     * the switch is translucent).
     */
    ios_backgroundColor?: ColorValue | null | undefined;
    /**
     * Called when the user tries to change the value of the switch.
     *
     * Receives the change event as an argument. If you want to only receive the
     * new value, use `onValueChange` instead.
     */
    onChange?: ((event: SwitchChangeEvent) => Promise<void> | void) | null | undefined;
    /**
     * Called when the user tries to change the value of the switch.
     *
     * Receives the new value as an argument. If you want to instead receive an
     * event, use `onChange`.
     */
    onValueChange?: ((value: boolean) => Promise<void> | void) | null | undefined;
}>;
/**
 * A visual toggle between two mutually exclusive states.
 *
 * This is a controlled component that requires an `onValueChange` callback that
 * updates the `value` prop in order for the component to reflect user actions.
 * If the `value` prop is not updated, the component will continue to render the
 * supplied `value` prop instead of the expected result of any user actions.
 */
declare class Switch extends React.Component<Props> {
    _nativeSwitchRef: React.ElementRef<typeof SwitchNativeComponent | typeof AndroidSwitchNativeComponent> | null | undefined;
    _lastNativeValue: boolean | null | undefined;
    render(): React.ReactNode;
    componentDidUpdate(): void;
    _handleChange: (event: SwitchChangeEvent) => void;
    _handleSwitchNativeComponentRef: (ref: any) => void;
}
export default Switch;
