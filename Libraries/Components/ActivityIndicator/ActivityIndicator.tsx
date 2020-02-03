'use strict';
import { $ReadOnly } from "utility-types";












const Platform = require('../../Utilities/Platform');
const React = require('react');
const StyleSheet = require('../../StyleSheet/StyleSheet');
const View = require('../View/View');
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";

const PlatformActivityIndicator = Platform.OS === 'android' ? require('../ProgressBarAndroid/ProgressBarAndroid') : require('./ActivityIndicatorViewNativeComponent').default;

const GRAY = '#999999';

type IndicatorSize = number | "small" | "large";

type IOSProps = $ReadOnly<{
  /**
   * Whether the indicator should hide when not animating (true by default).
   *
   * See http://facebook.github.io/react-native/docs/activityindicator.html#hideswhenstopped
   */
  hidesWhenStopped?: boolean | null | undefined;
}>;
type Props = $ReadOnly<ViewProps & IOSProps & {
  /**
   * Whether to show the indicator (true, the default) or hide it (false).
   *
   * See http://facebook.github.io/react-native/docs/activityindicator.html#animating
   */
  animating?: boolean | null | undefined;

  /**
   * The foreground color of the spinner (default is gray).
   *
   * See http://facebook.github.io/react-native/docs/activityindicator.html#color
   */
  color?: string | null | undefined;

  /**
   * Size of the indicator (default is 'small').
   * Passing a number to the size prop is only supported on Android.
   *
   * See http://facebook.github.io/react-native/docs/activityindicator.html#size
   */
  size?: IndicatorSize | null | undefined;
}>;

/**
 * Displays a circular loading indicator.
 *
 * See http://facebook.github.io/react-native/docs/activityindicator.html
 */
const ActivityIndicator = (props: Props, forwardedRef?: any) => {
  const {
    onLayout,
    style,
    size,
    ...restProps
  } = props;
  let sizeStyle;
  let sizeProp;

  switch (size) {
    case 'small':
      sizeStyle = styles.sizeSmall;
      sizeProp = 'small';
      break;
    case 'large':
      sizeStyle = styles.sizeLarge;
      sizeProp = 'large';
      break;
    default:
      sizeStyle = { height: props.size, width: props.size };
      break;

  }

  const nativeProps = {
    ...restProps,
    ref: forwardedRef,
    style: sizeStyle,
    size: sizeProp
  };

  const androidProps = {
    styleAttr: 'Normal',
    indeterminate: true
  };

  return <View onLayout={onLayout} style={StyleSheet.compose(styles.container, style)}>
      {Platform.OS === 'android' ? // $FlowFixMe Flow doesn't know when this is the android component
    <PlatformActivityIndicator {...nativeProps} {...androidProps} /> :
    /* $FlowFixMe(>=0.106.0 site=react_native_android_fb) This comment
     * suppresses an error found when Flow v0.106 was deployed. To see the
     * error, delete this comment and run Flow. */
    <PlatformActivityIndicator {...nativeProps} />}
    </View>;
};

const ActivityIndicatorWithRef: React.AbstractComponent<Props, HostComponent<unknown>> = React.forwardRef(ActivityIndicator);
ActivityIndicatorWithRef.displayName = 'ActivityIndicator';




ActivityIndicatorWithRef.defaultProps = {
  animating: true,
  color: Platform.OS === 'ios' ? GRAY : null,
  hidesWhenStopped: true,
  size: 'small'
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  sizeSmall: {
    width: 20,
    height: 20
  },
  sizeLarge: {
    width: 36,
    height: 36
  }
});

module.exports = ActivityIndicatorWithRef;