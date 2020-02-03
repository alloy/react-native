import { $ReadOnly } from "utility-types";
import { DirectEventHandler, WithDefault } from "../../Types/CodegenTypes";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
import * as React from "react";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
declare type NativeProps = $ReadOnly<ViewProps & {
    /**
     * The color of the refresh indicator.
     */
    tintColor?: ColorValue | null | undefined;
    /**
     * Title color.
     */
    titleColor?: ColorValue | null | undefined;
    /**
     * The title displayed under the refresh indicator.
     */
    title?: WithDefault<string, null>;
    /**
     * Called when the view starts refreshing.
     */
    onRefresh?: DirectEventHandler<null> | null | undefined;
    /**
     * Whether the view should be indicating an active refresh.
     */
    refreshing: boolean;
}>;
declare type ComponentType = HostComponent<NativeProps>;
interface NativeCommands {
    readonly setNativeRefreshing: (viewRef: React.ElementRef<ComponentType>, refreshing: boolean) => void;
}
export declare const Commands: NativeCommands;
declare const _default: any;
export default _default;
