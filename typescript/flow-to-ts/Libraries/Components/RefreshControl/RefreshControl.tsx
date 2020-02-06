'use strict';;
import Platform from '../../Utilities/Platform';
import React from 'react';
import { $ReadOnly } from "utility-types";












import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
import AndroidSwipeRefreshLayoutNativeComponent, { Commands as AndroidSwipeRefreshLayoutCommands } from "./AndroidSwipeRefreshLayoutNativeComponent";
import PullToRefreshViewNativeComponent, { Commands as PullToRefreshCommands } from "./PullToRefreshViewNativeComponent";

let RefreshLayoutConsts: any;
if (Platform.OS === 'android') {
  const AndroidSwipeRefreshLayout = require('../../ReactNative/UIManager').getViewManagerConfig('AndroidSwipeRefreshLayout');
  RefreshLayoutConsts = AndroidSwipeRefreshLayout ? AndroidSwipeRefreshLayout.Constants : { SIZE: {} };
} else {
  RefreshLayoutConsts = { SIZE: {} };
}

type IOSProps = $ReadOnly<{
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

type AndroidProps = $ReadOnly<{
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

export type RefreshControlProps = $ReadOnly<ViewProps & IOSProps & AndroidProps & {
  /**
   * Called when the view starts refreshing.
   */
  onRefresh?: () => void | null | undefined;

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
class RefreshControl extends React.Component<RefreshControlProps> {

  static SIZE: any = RefreshLayoutConsts.SIZE;

  _nativeRef: React.ElementRef<typeof PullToRefreshViewNativeComponent | typeof AndroidSwipeRefreshLayoutNativeComponent> | null | undefined;
  _lastNativeRefreshing = false;

  componentDidMount() {
    this._lastNativeRefreshing = this.props.refreshing;
  }

  componentDidUpdate(prevProps: RefreshControlProps) {
    // RefreshControl is a controlled component so if the native refreshing
    // value doesn't match the current js refreshing prop update it to
    // the js value.
    if (this.props.refreshing !== prevProps.refreshing) {
      this._lastNativeRefreshing = this.props.refreshing;
    } else if (this.props.refreshing !== this._lastNativeRefreshing && this._nativeRef) {
      if (Platform.OS === 'android') {
        AndroidSwipeRefreshLayoutCommands.setNativeRefreshing(this._nativeRef, this.props.refreshing);
      } else {
        PullToRefreshCommands.setNativeRefreshing(this._nativeRef, this.props.refreshing);
      }
      this._lastNativeRefreshing = this.props.refreshing;
    }
  }

  render(): React.ReactNode {
    if (Platform.OS === 'ios') {
      const {
        enabled,
        colors,
        progressBackgroundColor,
        size,
        progressViewOffset,
        ...props
      } = this.props;
      return <PullToRefreshViewNativeComponent {...props} ref={this._setNativeRef} onRefresh={this._onRefresh} />;
    } else {
      const {
        tintColor,
        titleColor,
        title,
        ...props
      } = this.props;
      return <AndroidSwipeRefreshLayoutNativeComponent {...props} ref={this._setNativeRef} onRefresh={this._onRefresh} />;
    }
  }

  _onRefresh = () => {
    this._lastNativeRefreshing = true;

    this.props.onRefresh && this.props.onRefresh();

    // The native component will start refreshing so force an update to
    // make sure it stays in sync with the js component.
    this.forceUpdate();
  };

  _setNativeRef = (ref: React.ElementRef<typeof PullToRefreshViewNativeComponent | typeof AndroidSwipeRefreshLayoutNativeComponent> | null | undefined) => {
    this._nativeRef = ref;
  };
}

export default RefreshControl;
