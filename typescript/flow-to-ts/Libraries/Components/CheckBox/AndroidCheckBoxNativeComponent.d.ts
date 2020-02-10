import { $ReadOnly } from "utility-types";
import * as React from "react";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type CheckBoxEvent = React.SyntheticEvent<$ReadOnly<{
    target: number;
    value: boolean;
}>>;
declare type NativeProps = $ReadOnly<ViewProps & {
    /**
     * Used in case the props change removes the component.
     */
    onChange?: ((event: CheckBoxEvent) => unknown) | null | undefined;
    /**
     * Invoked with the new value when the value changes.
     */
    onValueChange?: ((value: boolean) => unknown) | null | undefined;
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string | null | undefined;
    on?: boolean | null | undefined;
    enabled?: boolean;
    tintColors: {
        true: number | null | undefined;
        false: number | null | undefined;
    } | typeof undefined;
}>;
declare type NativeType = HostComponent<NativeProps>;
interface NativeCommands {
    readonly setNativeValue: ((viewRef: React.ElementRef<NativeType>, value: boolean) => void);
}
export declare const Commands: NativeCommands;
declare const _default: any;
export default _default;
