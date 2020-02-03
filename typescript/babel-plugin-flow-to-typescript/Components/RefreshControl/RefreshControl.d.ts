import { ColorValue } from '../../StyleSheet/StyleSheetTypes';
import { ViewProps } from '../View/ViewPropTypes';
declare let RefreshLayoutConsts: any;
declare type IOSProps = Readonly<{
    /**
     * The color of the refresh indicator.
     */
    tintColor?: ColorValue | null;
    /**
     * Title color.
     */
    titleColor?: ColorValue | null;
    /**
     * The title displayed under the refresh indicator.
     */
    title?: string | null;
}>;
declare type AndroidProps = Readonly<{
    /**
     * Whether the pull to refresh functionality is enabled.
     */
    enabled?: boolean | null;
    /**
     * The colors (at least one) that will be used to draw the refresh indicator.
     */
    colors?: ReadonlyArray<ColorValue> | null;
    /**
     * The background color of the refresh indicator.
     */
    progressBackgroundColor?: ColorValue | null;
    /**
     * Size of the refresh indicator, see RefreshControl.SIZE.
     */
    size?: (typeof RefreshLayoutConsts.SIZE.DEFAULT | typeof RefreshLayoutConsts.SIZE.LARGE) | null;
    /**
     * Progress view top offset
     */
    progressViewOffset?: number | null;
}>;
export declare type RefreshControlProps = Readonly<{
    /**
     * Called when the view starts refreshing.
     */
    onRefresh?: (() => void) | null;
    /**
     * Whether the view should be indicating an active refresh.
     */
    refreshing: boolean;
} & ViewProps & IOSProps & AndroidProps>;
export {};
