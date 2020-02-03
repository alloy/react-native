import { HostComponent } from '../../Renderer/shims/ReactNativeTypes';
import { ViewProps } from '../View/ViewPropTypes';
import * as React from 'react';
import { Float, WithDefault, BubblingEventHandler } from 'react-native/Libraries/Types/CodegenTypes';
declare type Event = Readonly<{
    timestamp: Float;
}>;
declare type NativeProps = Readonly<{
    date?: Float | null;
    initialDate?: Float | null;
    locale?: string | null;
    maximumDate?: Float | null;
    minimumDate?: Float | null;
    minuteInterval?: WithDefault<1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30, 1>;
    mode?: WithDefault<"date" | "time" | "datetime", "date">;
    onChange?: BubblingEventHandler<Event> | null;
    timeZoneOffsetInMinutes?: Float | null;
} & ViewProps>;
declare type ComponentType = HostComponent<NativeProps>;
interface NativeCommands {
    readonly setNativeDate: (viewRef: React.ElementRef<ComponentType>, date: Float) => void;
}
export declare const Commands: NativeCommands;
declare const _default: any;
export default _default;
