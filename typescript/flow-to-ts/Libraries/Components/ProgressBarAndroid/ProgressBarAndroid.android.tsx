yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/ProgressBarAndroid/ProgressBarAndroid.android.js
'use strict';
import { $ReadOnly } from "utility-types";












const React = require('react');

import ProgressBarAndroidNativeComponent from "./ProgressBarAndroidNativeComponent";

import { ViewProps } from "../View/ViewPropTypes";

export type ProgressBarAndroidProps = $ReadOnly<ViewProps & ({
  styleAttr: "Horizontal";
  indeterminate: false;
  progress: number;
} | {
  typeAttr: "Horizontal" | "Normal" | "Small" | "Large" | "Inverse" | "SmallInverse" | "LargeInverse";
  indeterminate: true;
}) & {
  /**
   * Whether to show the ProgressBar (true, the default) or hide it (false).
   */
  animating?: boolean | null | undefined;

  /**
   * Color of the progress bar.
   */
  color?: string | null | undefined;

  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string | null | undefined;
}>;

/**
 * React component that wraps the Android-only `ProgressBar`. This component is
 * used to indicate that the app is loading or there is activity in the app.
 *
 * Example:
 *
 * ```
 * render: function() {
 *   var progressBar =
 *     <View style={styles.container}>
 *       <ProgressBar styleAttr="Inverse" />
 *     </View>;

 *   return (
 *     <MyLoadingComponent
 *       componentView={componentView}
 *       loadingView={progressBar}
 *       style={styles.loadingComponent}
 *     />
 *   );
 * },
 * ```
 */
const ProgressBarAndroid = (props: ProgressBarAndroidProps, forwardedRef: React.Ref<typeof ProgressBarAndroidNativeComponent> | null | undefined) => {
  return <ProgressBarAndroidNativeComponent {...props} ref={forwardedRef} />;
};

const ProgressBarAndroidToExport = React.forwardRef(ProgressBarAndroid);




ProgressBarAndroidToExport.defaultProps = {
  styleAttr: 'Normal',
  indeterminate: true,
  animating: true
};




module.exports = (ProgressBarAndroidToExport as typeof ProgressBarAndroidNativeComponent);
Done in 0.56s.
