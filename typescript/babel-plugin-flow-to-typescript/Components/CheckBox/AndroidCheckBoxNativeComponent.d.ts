import * as React from 'react';
import { HostComponent } from '../../Renderer/shims/ReactNativeTypes';
import { ViewProps } from '../View/ViewPropTypes';
import { SyntheticEvent } from '../../Types/CoreEventTypes';
declare type CheckBoxEvent = SyntheticEvent<Readonly<{
    target: number;
    value: boolean;
}>>;
declare type NativeProps = Readonly<{
    /**
     * Used in case the props change removes the component.
     */
    onChange?: ((event: CheckBoxEvent) => unknown) | null;
    /**
     * Invoked with the new value when the value changes.
     */
    onValueChange?: ((value: boolean) => unknown) | null;
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string | null;
    on?: boolean | null;
    enabled?: boolean;
    tintColors: {
        true: number | undefined | null;
        false: number | undefined | null;
    } | typeof undefined;
} & ViewProps>;
declare type NativeType = HostComponent<NativeProps>;
interface NativeCommands {
    readonly setNativeValue: (viewRef: React.ElementRef<NativeType>, value: boolean) => void;
}
export declare const Commands: NativeCommands;
declare const _default: any;
export default _default;
