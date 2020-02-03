/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */
'use strict';

const React = require('react');

import ProgressBarAndroidNativeComponent from './ProgressBarAndroidNativeComponent';
import { ViewProps } from '../View/ViewPropTypes';
export type ProgressBarAndroidProps = Readonly<{
  /**
   * Whether to show the ProgressBar (true, the default) or hide it (false).
   */
  animating?: boolean | null;

  /**
   * Color of the progress bar.
   */
  color?: string | null;

  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string | null;
} & ViewProps & ({
  styleAttr: "Horizontal";
  indeterminate: false;
  progress: number;
} | {
  typeAttr: "Horizontal" | "Normal" | "Small" | "Large" | "Inverse" | "SmallInverse" | "LargeInverse";
  indeterminate: true;
})>;
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

const ProgressBarAndroid = (props: ProgressBarAndroidProps, forwardedRef?: React.Ref<typeof ProgressBarAndroidNativeComponent> | null) => {
  return <ProgressBarAndroidNativeComponent {...props} ref={forwardedRef} />;
};

const ProgressBarAndroidToExport = React.forwardRef(ProgressBarAndroid);
/* $FlowFixMe(>=0.89.0 site=react_native_android_fb) This comment suppresses an
 * error found when Flow v0.89 was deployed. To see the error, delete this
 * comment and run Flow. */

ProgressBarAndroidToExport.defaultProps = {
  styleAttr: 'Normal',
  indeterminate: true,
  animating: true
};
/* $FlowFixMe(>=0.89.0 site=react_native_android_fb) This comment suppresses an
 * error found when Flow v0.89 was deployed. To see the error, delete this
 * comment and run Flow. */

module.exports = (ProgressBarAndroidToExport as typeof ProgressBarAndroidNativeComponent);