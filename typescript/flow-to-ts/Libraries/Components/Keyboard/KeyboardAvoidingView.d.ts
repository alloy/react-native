import React from 'react';
import { $ReadOnly } from "utility-types";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import EmitterSubscription from "../../vendor/emitter/EmitterSubscription";
import { ViewProps, ViewLayout } from "../View/ViewPropTypes";
declare type Props = $ReadOnly<ViewProps & {
    /**
     * Specify how to react to the presence of the keyboard.
     */
    behavior?: ("height" | "position" | "padding") | null | undefined;
    /**
     * Style of the content container when `behavior` is 'position'.
     */
    contentContainerStyle?: ViewStyleProp | null | undefined;
    /**
     * Controls whether this `KeyboardAvoidingView` instance should take effect.
     * This is useful when more than one is on the screen. Defaults to true.
     */
    enabled: boolean | null | undefined;
    /**
     * Distance between the top of the user screen and the React Native view. This
     * may be non-zero in some cases. Defaults to 0.
     */
    keyboardVerticalOffset: number;
}>;
declare type State = {
    bottom: number;
};
/**
 * View that moves out of the way when the keyboard appears by automatically
 * adjusting its height, position, or bottom padding.
 */
declare class KeyboardAvoidingView extends React.Component<Props, State> {
    static defaultProps: {
        enabled: boolean;
        keyboardVerticalOffset: number;
    };
    _frame: ViewLayout | null | undefined;
    _subscriptions: Array<EmitterSubscription>;
    viewRef: {
        current: React.ElementRef<any> | null;
    };
    _initialFrameHeight: number;
    constructor(props: Props);
    _relativeKeyboardHeight(keyboardFrame: any): number;
    _onKeyboardChange: (event: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        duration: 0;
        easing: "keyboard";
        endCoordinates: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
            screenX: any;
            screenY: any;
            width: any;
            height: any;
        }>;
    }> | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        duration: number;
        easing: import("./Keyboard").KeyboardEventEasing;
        endCoordinates: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
            screenX: any;
            screenY: any;
            width: any;
            height: any;
        }>;
        startCoordinates: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
            screenX: any;
            screenY: any;
            width: any;
            height: any;
        }>;
        isEventFromThisApp: boolean;
    }> | null | undefined) => void;
    _onLayout: (event: import("../../Types/CoreEventTypes").LayoutEvent) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default KeyboardAvoidingView;
