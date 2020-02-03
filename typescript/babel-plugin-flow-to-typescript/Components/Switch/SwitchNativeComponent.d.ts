import { BubblingEventHandler, WithDefault } from '../../Types/CodegenTypes';
import { ColorValue } from '../../StyleSheet/StyleSheetTypes';
import { ViewProps } from '../View/ViewPropTypes';
import * as React from 'react';
import { HostComponent } from '../../Renderer/shims/ReactNativeTypes';
declare type SwitchChangeEvent = Readonly<{
    value: boolean;
}>;
declare type NativeProps = Readonly<{
    disabled?: WithDefault<boolean, false>;
    value?: WithDefault<boolean, false>;
    tintColor?: ColorValue | null;
    onTintColor?: ColorValue | null;
    thumbTintColor?: ColorValue | null;
    thumbColor?: ColorValue | null;
    trackColorForFalse?: ColorValue | null;
    trackColorForTrue?: ColorValue | null;
    onChange?: BubblingEventHandler<SwitchChangeEvent> | null;
} & ViewProps>;
declare type ComponentType = HostComponent<NativeProps>;
interface NativeCommands {
    readonly setValue: (viewRef: React.ElementRef<ComponentType>, value: boolean) => void;
}
export declare const Commands: NativeCommands;
declare const _default: any;
export default _default;
