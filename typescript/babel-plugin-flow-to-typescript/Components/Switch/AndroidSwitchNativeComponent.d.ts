import * as React from 'react';
import { WithDefault, BubblingEventHandler } from 'react-native/Libraries/Types/CodegenTypes';
import { HostComponent } from 'react-native/Libraries/Renderer/shims/ReactNativeTypes';
import { ColorValue } from '../../StyleSheet/StyleSheetTypes';
import { ViewProps } from '../View/ViewPropTypes';
declare type SwitchChangeEvent = Readonly<{
    value: boolean;
}>;
declare type NativeProps = Readonly<{
    disabled?: WithDefault<boolean, false>;
    enabled?: WithDefault<boolean, true>;
    thumbColor?: ColorValue | null;
    trackColorForFalse?: ColorValue | null;
    trackColorForTrue?: ColorValue | null;
    value?: WithDefault<boolean, false>;
    on?: WithDefault<boolean, false>;
    thumbTintColor?: ColorValue | null;
    trackTintColor?: ColorValue | null;
    onChange?: BubblingEventHandler<SwitchChangeEvent>;
} & ViewProps>;
declare type NativeType = HostComponent<NativeProps>;
interface NativeCommands {
    readonly setNativeValue: (viewRef: React.ElementRef<NativeType>, value: boolean) => void;
}
export declare const Commands: NativeCommands;
declare const _default: any;
export default _default;
