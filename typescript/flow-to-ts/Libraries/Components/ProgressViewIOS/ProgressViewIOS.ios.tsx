'use strict';;
import React from 'react';
import StyleSheet from '../../StyleSheet/StyleSheet';
import { $ReadOnly } from "utility-types";












import RCTProgressViewNativeComponent from "./RCTProgressViewNativeComponent";
import { ImageSource } from "../../Image/ImageSource";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";

type Props = $ReadOnly<ViewProps & {
  /**
   * The progress bar style.
   */
  progressViewStyle?: ("default" | "bar") | null | undefined;

  /**
   * The progress value (between 0 and 1).
   */
  progress?: number | null | undefined;

  /**
   * The tint color of the progress bar itself.
   */
  progressTintColor?: ColorValue | null | undefined;

  /**
   * The tint color of the progress bar track.
   */
  trackTintColor?: ColorValue | null | undefined;

  /**
   * A stretchable image to display as the progress bar.
   */
  progressImage?: ImageSource | null | undefined;

  /**
   * A stretchable image to display behind the progress bar.
   */
  trackImage?: ImageSource | null | undefined;
}>;

/**
 * Use `ProgressViewIOS` to render a UIProgressView on iOS.
 */
const ProgressViewIOS = (props: Props, forwardedRef?: React.Ref<typeof RCTProgressViewNativeComponent> | null | undefined) => <RCTProgressViewNativeComponent {...props} style={[styles.progressView, props.style]} ref={forwardedRef} />;

const styles = StyleSheet.create({
  progressView: {
    height: 2
  }
});

const ProgressViewIOSWithRef = React.forwardRef(ProgressViewIOS);

export default ProgressViewIOSWithRef as typeof RCTProgressViewNativeComponent;
