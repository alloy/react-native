import * as React from "react";
import { ViewProps } from "./ViewPropTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
export declare type ViewNativeComponentType = HostComponent<ViewProps>;
export declare const __INTERNAL_VIEW_CONFIG: {} | {
    bubblingEventTypes?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | undefined;
    directEventTypes?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        [x: string]: any;
    }> | undefined;
    uiViewClassName: string;
    validAttributes?: {
        [propName: string]: true | import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
            diff?: (<T>(arg1: any, arg2: any) => boolean) | undefined;
            process?: ((arg1: any) => any) | undefined;
        }>;
    } | undefined;
};
interface NativeCommands {
    readonly hotspotUpdate: ((viewRef: React.ElementRef<HostComponent<unknown>>, x: number, y: number) => void);
    readonly setPressed: ((viewRef: React.ElementRef<HostComponent<unknown>>, pressed: boolean) => void);
}
export declare const Commands: NativeCommands;
declare const _default: any;
export default _default;
