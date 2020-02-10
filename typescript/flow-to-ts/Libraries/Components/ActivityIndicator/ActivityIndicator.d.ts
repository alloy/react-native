import React from 'react';
import { $ReadOnly } from "utility-types";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type IndicatorSize = number | "small" | "large";
declare type IOSProps = $ReadOnly<{
    /**
     * Whether the indicator should hide when not animating (true by default).
     *
     * See http://facebook.github.io/react-native/docs/activityindicator.html#hideswhenstopped
     */
    hidesWhenStopped?: boolean | null | undefined;
}>;
declare type Props = $ReadOnly<ViewProps & IOSProps & {
    /**
     * Whether to show the indicator (true, the default) or hide it (false).
     *
     * See http://facebook.github.io/react-native/docs/activityindicator.html#animating
     */
    animating?: boolean | null | undefined;
    /**
     * The foreground color of the spinner (default is gray).
     *
     * See http://facebook.github.io/react-native/docs/activityindicator.html#color
     */
    color?: string | null | undefined;
    /**
     * Size of the indicator (default is 'small').
     * Passing a number to the size prop is only supported on Android.
     *
     * See http://facebook.github.io/react-native/docs/activityindicator.html#size
     */
    size?: IndicatorSize | null | undefined;
}>;
declare const ActivityIndicatorWithRef: React.AbstractComponent<Props, HostComponent<unknown>>;
export default ActivityIndicatorWithRef;
