import { $ReadOnly } from "utility-types";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare let RefreshLayoutConsts: any;
declare type IOSProps = $ReadOnly<{
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
    title?: string | null | undefined;
}>;
declare type AndroidProps = $ReadOnly<{
    /**
     * Whether the pull to refresh functionality is enabled.
     */
    enabled?: boolean | null | undefined;
    /**
     * The colors (at least one) that will be used to draw the refresh indicator.
     */
    colors?: ReadonlyArray<ColorValue> | null | undefined;
    /**
     * The background color of the refresh indicator.
     */
    progressBackgroundColor?: ColorValue | null | undefined;
    /**
     * Size of the refresh indicator, see RefreshControl.SIZE.
     */
    size?: (typeof RefreshLayoutConsts.SIZE.DEFAULT | typeof RefreshLayoutConsts.SIZE.LARGE) | null | undefined;
    /**
     * Progress view top offset
     */
    progressViewOffset?: number | null | undefined;
}>;
export declare type RefreshControlProps = $ReadOnly<ViewProps & IOSProps & AndroidProps & {
    /**
     * Called when the view starts refreshing.
     */
    onRefresh?: () => void | null | undefined;
    /**
     * Whether the view should be indicating an active refresh.
     */
    refreshing: boolean;
}>;
export {};
