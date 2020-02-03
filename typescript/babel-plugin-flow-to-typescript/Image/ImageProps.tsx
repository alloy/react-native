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

import { SyntheticEvent, LayoutEvent } from '../Types/CoreEventTypes';
import { EdgeInsetsProp } from '../StyleSheet/EdgeInsetsPropType';
import { ImageSource } from './ImageSource';
import { ViewStyleProp, ImageStyleProp } from '../StyleSheet/StyleSheet';
import { DimensionValue } from '../StyleSheet/StyleSheetTypes';
import { ViewProps } from '../Components/View/ViewPropTypes';
export type ImageLoadEvent = SyntheticEvent<Readonly<{
  source: Readonly<{
    width: number;
    height: number;
    url: string;
  }>;
  uri?: string;
}>>;
type IOSImageProps = Readonly<{
  /**
   * A static image to display while loading the image source.
   *
   * See https://facebook.github.io/react-native/docs/image.html#defaultsource
   */
  defaultSource?: ImageSource | null;

  /**
   * Invoked when a partial load of the image is complete.
   *
   * See https://facebook.github.io/react-native/docs/image.html#onpartialload
   */
  onPartialLoad?: (() => void) | null;

  /**
   * Invoked on download progress with `{nativeEvent: {loaded, total}}`.
   *
   * See https://facebook.github.io/react-native/docs/image.html#onprogress
   */
  onProgress?: ((event: SyntheticEvent<Readonly<{
    loaded: number;
    total: number;
  }>>) => void) | null;
}>;
type AndroidImageProps = Readonly<{
  loadingIndicatorSource?: (number | Readonly<{
    uri: string;
  }>) | null;
  progressiveRenderingEnabled?: boolean | null;
  fadeDuration?: number | null;
}>;
export type ImageProps = {
  /**
   * When true, indicates the image is an accessibility element.
   *
   * See https://facebook.github.io/react-native/docs/image.html#accessible
   */
  accessible?: boolean | null;

  /**
   * The text that's read by the screen reader when the user interacts with
   * the image.
   *
   * See https://facebook.github.io/react-native/docs/image.html#accessibilitylabel
   */
  accessibilityLabel?: Stringish | null;

  /**
   * blurRadius: the blur radius of the blur filter added to the image
   *
   * See https://facebook.github.io/react-native/docs/image.html#blurradius
   */
  blurRadius?: number | null;

  /**
   * See https://facebook.github.io/react-native/docs/image.html#capinsets
   */
  capInsets?: EdgeInsetsProp | null;

  /**
   * Invoked on load error with `{nativeEvent: {error}}`.
   *
   * See https://facebook.github.io/react-native/docs/image.html#onerror
   */
  onError?: ((event: SyntheticEvent<Readonly<{
    error: string;
  }>>) => void) | null;

  /**
   * Invoked on mount and layout changes with
   * `{nativeEvent: {layout: {x, y, width, height}}}`.
   *
   * See https://facebook.github.io/react-native/docs/image.html#onlayout
   */
  onLayout?: ((event: LayoutEvent) => unknown) | null;

  /**
   * Invoked when load completes successfully.
   *
   * See https://facebook.github.io/react-native/docs/image.html#onload
   */
  onLoad?: ((event: ImageLoadEvent) => void) | null;

  /**
   * Invoked when load either succeeds or fails.
   *
   * See https://facebook.github.io/react-native/docs/image.html#onloadend
   */
  onLoadEnd?: (() => void) | null;

  /**
   * Invoked on load start.
   *
   * See https://facebook.github.io/react-native/docs/image.html#onloadstart
   */
  onLoadStart?: (() => void) | null;

  /**
   * See https://facebook.github.io/react-native/docs/image.html#resizemethod
   */
  resizeMethod?: ("auto" | "resize" | "scale") | null;

  /**
   * The image source (either a remote URL or a local file resource).
   *
   * See https://facebook.github.io/react-native/docs/image.html#source
   */
  source?: ImageSource | null;

  /**
   * See https://facebook.github.io/react-native/docs/image.html#style
   */
  style?: ImageStyleProp | null;
  // Can be set via props or style, for now
  height?: DimensionValue | null;
  width?: DimensionValue | null;

  /**
   * Determines how to resize the image when the frame doesn't match the raw
   * image dimensions.
   *
   * See https://facebook.github.io/react-native/docs/image.html#resizemode
   */
  resizeMode?: ("cover" | "contain" | "stretch" | "repeat" | "center") | null;

  /**
   * A unique identifier for this element to be used in UI Automation
   * testing scripts.
   *
   * See https://facebook.github.io/react-native/docs/image.html#testid
   */
  testID?: string | null;
  src?: never;
  children?: never;
} & Omit<ViewProps, keyof Readonly<{
  style: ViewStyleProp | undefined | null;
}>> & IOSImageProps & AndroidImageProps;