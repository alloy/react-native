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

const requireNativeComponent = require('../ReactNative/requireNativeComponent');

import { DangerouslyImpreciseStyle } from '../StyleSheet/StyleSheet';
import { ResolvedAssetSource } from './AssetSourceResolver';
import { HostComponent } from '../Renderer/shims/ReactNativeTypes';
import { ImageProps } from './ImageProps';
import { ViewProps } from '../Components/View/ViewPropTypes';
import { ImageStyleProp } from '../StyleSheet/StyleSheet';
import { ColorValue } from '../StyleSheet/StyleSheetTypes';
import ImageViewViewConfig from './ImageViewViewConfig';

const ReactNativeViewConfigRegistry = require('../Renderer/shims/ReactNativeViewConfigRegistry');

type NativeProps = Readonly<{
  style?: ImageStyleProp | DangerouslyImpreciseStyle;
  // iOS native props
  tintColor?: ColorValue;
  // Android native props
  shouldNotifyLoadEvents?: boolean;
  src?: (ResolvedAssetSource | undefined | null) | ReadonlyArray<{
    uri: string;
  }>;
  headers?: string | null;
  defaultSrc?: string | null;
  loadingIndicatorSrc?: string | null;
} & ImageProps & ViewProps>;
let ImageViewNativeComponent;

if (global.RN$Bridgeless) {
  ReactNativeViewConfigRegistry.register('RCTImageView', () => {
    return ImageViewViewConfig;
  });
  ImageViewNativeComponent = 'RCTImageView';
} else {
  ImageViewNativeComponent = requireNativeComponent<NativeProps>('RCTImageView');
} // flowlint-next-line unclear-type:off


export default ((ImageViewNativeComponent as any) as HostComponent<NativeProps>);