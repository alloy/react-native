/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */
'use strict';

const React = require('react');

const StyleSheet = require('../../StyleSheet/StyleSheet');

import RCTProgressViewNativeComponent from './RCTProgressViewNativeComponent';
import { ImageSource } from '../../Image/ImageSource';
import { ColorValue } from '../../StyleSheet/StyleSheetTypes';
import { ViewProps } from '../View/ViewPropTypes';
type Props = Readonly<{
  /**
   * The progress bar style.
   */
  progressViewStyle?: ("default" | "bar") | null;

  /**
   * The progress value (between 0 and 1).
   */
  progress?: number | null;

  /**
   * The tint color of the progress bar itself.
   */
  progressTintColor?: ColorValue | null;

  /**
   * The tint color of the progress bar track.
   */
  trackTintColor?: ColorValue | null;

  /**
   * A stretchable image to display as the progress bar.
   */
  progressImage?: ImageSource | null;

  /**
   * A stretchable image to display behind the progress bar.
   */
  trackImage?: ImageSource | null;
} & ViewProps>;
/**
 * Use `ProgressViewIOS` to render a UIProgressView on iOS.
 */

const ProgressViewIOS = (props: Props, forwardedRef?: React.Ref<typeof RCTProgressViewNativeComponent> | null) => <RCTProgressViewNativeComponent {...props} style={[styles.progressView, props.style]} ref={forwardedRef} />;

const styles = StyleSheet.create({
  progressView: {
    height: 2
  }
});
const ProgressViewIOSWithRef = React.forwardRef(ProgressViewIOS);
module.exports = (ProgressViewIOSWithRef as typeof RCTProgressViewNativeComponent);