'use strict';
import { $ReadOnly } from "utility-types";












const requireNativeComponent = require('../ReactNative/requireNativeComponent');

import { DangerouslyImpreciseStyle } from "../StyleSheet/StyleSheet";
import { ResolvedAssetSource } from "./AssetSourceResolver";
import { HostComponent } from "../Renderer/shims/ReactNativeTypes";
import { ImageProps } from "./ImageProps";
import { ViewProps } from "../Components/View/ViewPropTypes";
import { ImageStyleProp } from "../StyleSheet/StyleSheet";
import { ColorValue } from "../StyleSheet/StyleSheetTypes";

import ImageViewViewConfig from "./ImageViewViewConfig";
const ReactNativeViewConfigRegistry = require('../Renderer/shims/ReactNativeViewConfigRegistry');

type NativeProps = $ReadOnly<ImageProps & ViewProps & {
  style?: ImageStyleProp | DangerouslyImpreciseStyle;
  // iOS native props
  tintColor?: ColorValue;
  // Android native props
  shouldNotifyLoadEvents?: boolean;
  src?: (ResolvedAssetSource | null | undefined) | ReadonlyArray<{uri: string;}>;
  headers?: string | null | undefined;
  defaultSrc?: string | null | undefined;
  loadingIndicatorSrc?: string | null | undefined;
}>;

let ImageViewNativeComponent;
if (global.RN$Bridgeless) {
  ReactNativeViewConfigRegistry.register('RCTImageView', () => {
    return ImageViewViewConfig;
  });
  ImageViewNativeComponent = 'RCTImageView';
} else {
  ImageViewNativeComponent = requireNativeComponent<NativeProps>('RCTImageView');
}

// flowlint-next-line unclear-type:off
export default ((ImageViewNativeComponent as any) as HostComponent<NativeProps>);