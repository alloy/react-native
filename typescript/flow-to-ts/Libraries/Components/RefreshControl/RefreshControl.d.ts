import React from 'react';
import { $ReadOnly } from "utility-types";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
import AndroidSwipeRefreshLayoutNativeComponent from "./AndroidSwipeRefreshLayoutNativeComponent";
import PullToRefreshViewNativeComponent from "./PullToRefreshViewNativeComponent";
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
    onRefresh?: (() => void) | null | undefined;
    /**
     * Whether the view should be indicating an active refresh.
     */
    refreshing: boolean;
}>;
/**
 * This component is used inside a ScrollView or ListView to add pull to refresh
 * functionality. When the ScrollView is at `scrollY: 0`, swiping down
 * triggers an `onRefresh` event.
 *
 * ### Usage example
 *
 * ``` js
 * class RefreshableList extends Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       refreshing: false,
 *     };
 *   }
 *
 *   _onRefresh() {
 *     this.setState({refreshing: true});
 *     fetchData().then(() => {
 *       this.setState({refreshing: false});
 *     });
 *   }
 *
 *   render() {
 *     return (
 *       <ListView
 *         refreshControl={
 *           <RefreshControl
 *             refreshing={this.state.refreshing}
 *             onRefresh={this._onRefresh.bind(this)}
 *           />
 *         }
 *         ...
 *       >
 *       ...
 *       </ListView>
 *     );
 *   }
 *   ...
 * }
 * ```
 *
 * __Note:__ `refreshing` is a controlled prop, this is why it needs to be set to true
 * in the `onRefresh` function otherwise the refresh indicator will stop immediately.
 */
declare class RefreshControl extends React.Component<RefreshControlProps> {
    static SIZE: any;
    _nativeRef: React.ElementRef<typeof PullToRefreshViewNativeComponent | typeof AndroidSwipeRefreshLayoutNativeComponent> | null | undefined;
    _lastNativeRefreshing: boolean;
    componentDidMount(): void;
    componentDidUpdate(prevProps: RefreshControlProps): void;
    render(): React.ReactNode;
    _onRefresh: () => void;
    _setNativeRef: (ref: any) => void;
}
export default RefreshControl;
