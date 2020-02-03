import * as React from "react";
import { ViewProps } from "./ViewPropTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
export declare type ViewNativeComponentType = HostComponent<ViewProps>;
export declare const __INTERNAL_VIEW_CONFIG: {} | {
    bubblingEventTypes?: any;
    directEventTypes?: any;
    uiViewClassName: string;
    validAttributes?: {
        [propName: string]: any;
    };
};
interface NativeCommands {
    readonly hotspotUpdate: (viewRef: React.ElementRef<HostComponent<unknown>>, x: number, y: number) => void;
    readonly setPressed: (viewRef: React.ElementRef<HostComponent<unknown>>, pressed: boolean) => void;
}
export declare const Commands: NativeCommands;
declare const _default: any;
export default _default;
