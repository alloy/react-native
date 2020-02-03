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

import { LayoutEvent, PressEvent, TextLayoutEvent } from '../Types/CoreEventTypes';
import { Node } from 'react';
import { TextStyleProp } from '../StyleSheet/StyleSheet';
import { AccessibilityRole, AccessibilityState } from '../Components/View/ViewAccessibility';
export type PressRetentionOffset = Readonly<{
  top: number;
  left: number;
  bottom: number;
  right: number;
}>;
/**
 * @see https://facebook.github.io/react-native/docs/text.html#reference
 */

export type TextProps = Readonly<{
  /**
   * Indicates whether the view is an accessibility element.
   *
   * See https://facebook.github.io/react-native/docs/text.html#accessible
   */
  accessible?: boolean | null;
  accessibilityHint?: Stringish | null;
  accessibilityLabel?: Stringish | null;
  accessibilityRole?: AccessibilityRole | null;
  accessibilityState?: AccessibilityState | null;

  /**
   * Whether font should be scaled down automatically.
   *
   * See https://facebook.github.io/react-native/docs/text.html#adjustsfontsizetofit
   */
  adjustsFontSizeToFit?: boolean | null;

  /**
   * Whether fonts should scale to respect Text Size accessibility settings.
   *
   * See https://facebook.github.io/react-native/docs/text.html#allowfontscaling
   */
  allowFontScaling?: boolean | null;
  children?: Node | null;

  /**
   * When `numberOfLines` is set, this prop defines how text will be
   * truncated.
   *
   * See https://facebook.github.io/react-native/docs/text.html#ellipsizemode
   */
  ellipsizeMode?: ("clip" | "head" | "middle" | "tail") | null;

  /**
   * Specifies largest possible scale a font can reach when `allowFontScaling` is enabled.
   * Possible values:
   * `null/undefined` (default): inherit from the parent node or the global default (0)
   * `0`: no max, ignore parent/global default
   * `>= 1`: sets the maxFontSizeMultiplier of this node to this value
   */
  maxFontSizeMultiplier?: number | null;

  /**
   * Used to locate this view from native code.
   *
   * See https://facebook.github.io/react-native/docs/text.html#nativeid
   */
  nativeID?: string | null;

  /**
   * Used to truncate the text with an ellipsis.
   *
   * See https://facebook.github.io/react-native/docs/text.html#numberoflines
   */
  numberOfLines?: number | null;

  /**
   * Invoked on mount and layout changes.
   *
   * See https://facebook.github.io/react-native/docs/text.html#onlayout
   */
  onLayout?: ((event: LayoutEvent) => unknown) | null;

  /**
   * This function is called on long press.
   *
   * See https://facebook.github.io/react-native/docs/text.html#onlongpress
   */
  onLongPress?: ((event: PressEvent) => unknown) | null;

  /**
   * This function is called on press.
   *
   * See https://facebook.github.io/react-native/docs/text.html#onpress
   */
  onPress?: ((event: PressEvent) => unknown) | null;
  onResponderGrant?: ((event: PressEvent, dispatchID: string) => void) | null;
  onResponderMove?: ((event: PressEvent) => void) | null;
  onResponderRelease?: ((event: PressEvent) => void) | null;
  onResponderTerminate?: ((event: PressEvent) => void) | null;
  onResponderTerminationRequest?: (() => boolean) | null;
  onStartShouldSetResponder?: (() => boolean) | null;
  onMoveShouldSetResponder?: (() => boolean) | null;
  onTextLayout?: ((event: TextLayoutEvent) => unknown) | null;

  /**
   * Defines how far your touch may move off of the button, before
   * deactivating the button.
   *
   * See https://facebook.github.io/react-native/docs/text.html#pressretentionoffset
   */
  pressRetentionOffset?: PressRetentionOffset | null;

  /**
   * Lets the user select text.
   *
   * See https://facebook.github.io/react-native/docs/text.html#selectable
   */
  selectable?: boolean | null;
  style?: TextStyleProp | null;

  /**
   * Used to locate this view in end-to-end tests.
   *
   * See https://facebook.github.io/react-native/docs/text.html#testid
   */
  testID?: string | null;

  /**
   * Android Only
   */

  /**
   * Specifies the disabled state of the text view for testing purposes.
   *
   * See https://facebook.github.io/react-native/docs/text.html#disabled
   */
  disabled?: boolean | null;

  /**
   * The highlight color of the text.
   *
   * See https://facebook.github.io/react-native/docs/text.html#selectioncolor
   */
  selectionColor?: string | null;
  dataDetectorType?: ("phoneNumber" | "link" | "email" | "none" | "all") | null;

  /**
   * Set text break strategy on Android.
   *
   * See https://facebook.github.io/react-native/docs/text.html#textbreakstrategy
   */
  textBreakStrategy?: ("balanced" | "highQuality" | "simple") | null;

  /**
   * iOS Only
   */
  adjustsFontSizeToFit?: boolean | null;

  /**
   * Smallest possible scale a font can reach.
   *
   * See https://facebook.github.io/react-native/docs/text.html#minimumfontscale
   */
  minimumFontScale?: number | null;

  /**
   * When `true`, no visual change is made when text is pressed down.
   *
   * See https://facebook.github.io/react-native/docs/text.html#supperhighlighting
   */
  suppressHighlighting?: boolean | null;
}>;