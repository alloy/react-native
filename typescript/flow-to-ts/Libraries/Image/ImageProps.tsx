yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Image/ImageProps.js
'use strict';
import { $ReadOnly, $Diff } from "utility-types";












import { SyntheticEvent, LayoutEvent } from "../Types/CoreEventTypes";
import { EdgeInsetsProp } from "../StyleSheet/EdgeInsetsPropType";
import { ImageSource } from "./ImageSource";
import { ViewStyleProp, ImageStyleProp } from "../StyleSheet/StyleSheet";
import { DimensionValue } from "../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../Components/View/ViewPropTypes";

export type ImageLoadEvent = React.SyntheticEvent<$ReadOnly<{
  source: $ReadOnly<{
    width: number;
    height: number;
    url: string;
  }>;
  uri?: string; // Only on Android
}>>;

type IOSImageProps = $ReadOnly<{
  /**
   * A static image to display while loading the image source.
   *
   * See https://facebook.github.io/react-native/docs/image.html#defaultsource
   */
  defaultSource?: ImageSource | null | undefined;

  /**
   * Invoked when a partial load of the image is complete.
   *
   * See https://facebook.github.io/react-native/docs/image.html#onpartialload
   */
  onPartialLoad?: () => void | null | undefined;

  /**
   * Invoked on download progress with `{nativeEvent: {loaded, total}}`.
   *
   * See https://facebook.github.io/react-native/docs/image.html#onprogress
   */
  onProgress?: (event: React.SyntheticEvent<$ReadOnly<{loaded: number;total: number;}>>) => void | null | undefined;
}>;

type AndroidImageProps = $ReadOnly<{
  loadingIndicatorSource?: (number | $ReadOnly<{uri: string;}>) | null | undefined;
  progressiveRenderingEnabled?: boolean | null | undefined;
  fadeDuration?: number | null | undefined;
}>;

export type ImageProps = $Diff<ViewProps, $ReadOnly<{style: ViewStyleProp | null | undefined;}>> & IOSImageProps & AndroidImageProps & {
  /**
   * When true, indicates the image is an accessibility element.
   *
   * See https://facebook.github.io/react-native/docs/image.html#accessible
   */
  accessible?: boolean | null | undefined;

  /**
   * The text that's read by the screen reader when the user interacts with
   * the image.
   *
   * See https://facebook.github.io/react-native/docs/image.html#accessibilitylabel
   */
  accessibilityLabel?: Stringish | null | undefined;

  /**
   * blurRadius: the blur radius of the blur filter added to the image
   *
   * See https://facebook.github.io/react-native/docs/image.html#blurradius
   */
  blurRadius?: number | null | undefined;

  /**
   * See https://facebook.github.io/react-native/docs/image.html#capinsets
   */
  capInsets?: EdgeInsetsProp | null | undefined;

  /**
   * Invoked on load error with `{nativeEvent: {error}}`.
   *
   * See https://facebook.github.io/react-native/docs/image.html#onerror
   */
  onError?: (event: React.SyntheticEvent<$ReadOnly<{
    error: string;
  }>>) => void | null | undefined;

  /**
   * Invoked on mount and layout changes with
   * `{nativeEvent: {layout: {x, y, width, height}}}`.
   *
   * See https://facebook.github.io/react-native/docs/image.html#onlayout
   */
  onLayout?: (event: LayoutEvent) => unknown | null | undefined;

  /**
   * Invoked when load completes successfully.
   *
   * See https://facebook.github.io/react-native/docs/image.html#onload
   */
  onLoad?: (event: ImageLoadEvent) => void | null | undefined;

  /**
   * Invoked when load either succeeds or fails.
   *
   * See https://facebook.github.io/react-native/docs/image.html#onloadend
   */
  onLoadEnd?: () => void | null | undefined;

  /**
   * Invoked on load start.
   *
   * See https://facebook.github.io/react-native/docs/image.html#onloadstart
   */
  onLoadStart?: () => void | null | undefined;

  /**
   * See https://facebook.github.io/react-native/docs/image.html#resizemethod
   */
  resizeMethod?: ("auto" | "resize" | "scale") | null | undefined;

  /**
   * The image source (either a remote URL or a local file resource).
   *
   * See https://facebook.github.io/react-native/docs/image.html#source
   */
  source?: ImageSource | null | undefined;

  /**
   * See https://facebook.github.io/react-native/docs/image.html#style
   */
  style?: ImageStyleProp | null | undefined;
  // Can be set via props or style, for now
  height?: DimensionValue | null | undefined;
  width?: DimensionValue | null | undefined;

  /**
   * Determines how to resize the image when the frame doesn't match the raw
   * image dimensions.
   *
   * See https://facebook.github.io/react-native/docs/image.html#resizemode
   */
  resizeMode?: ("cover" | "contain" | "stretch" | "repeat" | "center") | null | undefined;

  /**
   * A unique identifier for this element to be used in UI Automation
   * testing scripts.
   *
   * See https://facebook.github.io/react-native/docs/image.html#testid
   */
  testID?: string | null | undefined;
  src?: never;
  children?: never;
};
Done in 0.50s.
