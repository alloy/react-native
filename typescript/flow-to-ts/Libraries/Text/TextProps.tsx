'use strict';
import { $ReadOnly } from "utility-types";












import { LayoutEvent, PressEvent, TextLayoutEvent } from "../Types/CoreEventTypes";
import { Node } from "react";
import { TextStyleProp } from "../StyleSheet/StyleSheet";
import { AccessibilityRole, AccessibilityState } from "../Components/View/ViewAccessibility";

export type PressRetentionOffset = $ReadOnly<{
  top: number;
  left: number;
  bottom: number;
  right: number;
}>;

/**
 * @see https://facebook.github.io/react-native/docs/text.html#reference
 */
export type TextProps = $ReadOnly<{
  /**
   * Indicates whether the view is an accessibility element.
   *
   * See https://facebook.github.io/react-native/docs/text.html#accessible
   */
  accessible?: boolean | null | undefined;
  accessibilityHint?: Stringish | null | undefined;
  accessibilityLabel?: Stringish | null | undefined;
  accessibilityRole?: AccessibilityRole | null | undefined;
  accessibilityState?: AccessibilityState | null | undefined;

  /**
   * Whether font should be scaled down automatically.
   *
   * See https://facebook.github.io/react-native/docs/text.html#adjustsfontsizetofit
   */
  adjustsFontSizeToFit?: boolean | null | undefined;

  /**
   * Whether fonts should scale to respect Text Size accessibility settings.
   *
   * See https://facebook.github.io/react-native/docs/text.html#allowfontscaling
   */
  allowFontScaling?: boolean | null | undefined;
  children?: Node | null | undefined;

  /**
   * When `numberOfLines` is set, this prop defines how text will be
   * truncated.
   *
   * See https://facebook.github.io/react-native/docs/text.html#ellipsizemode
   */
  ellipsizeMode?: ("clip" | "head" | "middle" | "tail") | null | undefined;

  /**
   * Specifies largest possible scale a font can reach when `allowFontScaling` is enabled.
   * Possible values:
   * `null/undefined` (default): inherit from the parent node or the global default (0)
   * `0`: no max, ignore parent/global default
   * `>= 1`: sets the maxFontSizeMultiplier of this node to this value
   */
  maxFontSizeMultiplier?: number | null | undefined;

  /**
   * Used to locate this view from native code.
   *
   * See https://facebook.github.io/react-native/docs/text.html#nativeid
   */
  nativeID?: string | null | undefined;

  /**
   * Used to truncate the text with an ellipsis.
   *
   * See https://facebook.github.io/react-native/docs/text.html#numberoflines
   */
  numberOfLines?: number | null | undefined;

  /**
   * Invoked on mount and layout changes.
   *
   * See https://facebook.github.io/react-native/docs/text.html#onlayout
   */
  onLayout?: ((event: LayoutEvent) => unknown) | null | undefined;

  /**
   * This function is called on long press.
   *
   * See https://facebook.github.io/react-native/docs/text.html#onlongpress
   */
  onLongPress?: ((event: PressEvent) => unknown) | null | undefined;

  /**
   * This function is called on press.
   *
   * See https://facebook.github.io/react-native/docs/text.html#onpress
   */
  onPress?: ((event: PressEvent) => unknown) | null | undefined;
  onResponderGrant?: ((event: PressEvent, dispatchID: string) => void) | null | undefined;
  onResponderMove?: ((event: PressEvent) => void) | null | undefined;
  onResponderRelease?: ((event: PressEvent) => void) | null | undefined;
  onResponderTerminate?: ((event: PressEvent) => void) | null | undefined;
  onResponderTerminationRequest?: (() => boolean) | null | undefined;
  onStartShouldSetResponder?: (() => boolean) | null | undefined;
  onMoveShouldSetResponder?: (() => boolean) | null | undefined;
  onTextLayout?: ((event: TextLayoutEvent) => unknown) | null | undefined;

  /**
   * Defines how far your touch may move off of the button, before
   * deactivating the button.
   *
   * See https://facebook.github.io/react-native/docs/text.html#pressretentionoffset
   */
  pressRetentionOffset?: PressRetentionOffset | null | undefined;

  /**
   * Lets the user select text.
   *
   * See https://facebook.github.io/react-native/docs/text.html#selectable
   */
  selectable?: boolean | null | undefined;
  style?: TextStyleProp | null | undefined;

  /**
   * Used to locate this view in end-to-end tests.
   *
   * See https://facebook.github.io/react-native/docs/text.html#testid
   */
  testID?: string | null | undefined;

  /**
   * Android Only
   */



  /**
   * Specifies the disabled state of the text view for testing purposes.
   *
   * See https://facebook.github.io/react-native/docs/text.html#disabled
   */
  disabled?: boolean | null | undefined;

  /**
   * The highlight color of the text.
   *
   * See https://facebook.github.io/react-native/docs/text.html#selectioncolor
   */
  selectionColor?: string | null | undefined;

  dataDetectorType?: ("phoneNumber" | "link" | "email" | "none" | "all") | null | undefined;

  /**
   * Set text break strategy on Android.
   *
   * See https://facebook.github.io/react-native/docs/text.html#textbreakstrategy
   */
  textBreakStrategy?: ("balanced" | "highQuality" | "simple") | null | undefined;

  /**
   * iOS Only
   */
  adjustsFontSizeToFit?: boolean | null | undefined;

  /**
   * Smallest possible scale a font can reach.
   *
   * See https://facebook.github.io/react-native/docs/text.html#minimumfontscale
   */
  minimumFontScale?: number | null | undefined;

  /**
   * When `true`, no visual change is made when text is pressed down.
   *
   * See https://facebook.github.io/react-native/docs/text.html#supperhighlighting
   */
  suppressHighlighting?: boolean | null | undefined;
}>;
