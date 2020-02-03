/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */
'use strict';

import { HostComponent } from '../../Renderer/shims/ReactNativeTypes';
import { ViewProps } from '../View/ViewPropTypes';
import { ViewStyleProp, DangerouslyImpreciseStyle } from '../../StyleSheet/StyleSheet';
import { ColorValue } from '../../StyleSheet/StyleSheetTypes';
import { EdgeInsetsProp } from '../../StyleSheet/EdgeInsetsPropType';
import { ScrollEvent } from '../../Types/CoreEventTypes';
import { PointProp } from '../../StyleSheet/PointPropType';
export type ScrollViewNativeProps = Readonly<{
  alwaysBounceHorizontal?: boolean | null;
  alwaysBounceVertical?: boolean | null;
  automaticallyAdjustContentInsets?: boolean | null;
  bounces?: boolean | null;
  bouncesZoom?: boolean | null;
  canCancelContentTouches?: boolean | null;
  centerContent?: boolean | null;
  contentInset?: EdgeInsetsProp | null;
  contentInsetAdjustmentBehavior?: ("automatic" | "scrollableAxes" | "never" | "always") | null;
  contentOffset?: PointProp | null;
  decelerationRate?: ("fast" | "normal" | number) | null;
  directionalLockEnabled?: boolean | null;
  disableIntervalMomentum?: boolean | null;
  endFillColor?: ColorValue | null;
  fadingEdgeLength?: number | null;
  indicatorStyle?: ("default" | "black" | "white") | null;
  keyboardDismissMode?: ("none" | "on-drag" | "interactive") | null;
  maintainVisibleContentPosition?: Readonly<{
    minIndexForVisible: number;
    autoscrollToTopThreshold?: number | null;
  }> | null;
  maximumZoomScale?: number | null;
  minimumZoomScale?: number | null;
  nestedScrollEnabled?: boolean | null;
  onMomentumScrollBegin?: ((event: ScrollEvent) => void) | null;
  onMomentumScrollEnd?: ((event: ScrollEvent) => void) | null;
  onScroll?: ((event: ScrollEvent) => void) | null;
  onScrollBeginDrag?: ((event: ScrollEvent) => void) | null;
  onScrollEndDrag?: ((event: ScrollEvent) => void) | null;
  onScrollToTop?: (event: ScrollEvent) => void;
  overScrollMode?: ("auto" | "always" | "never") | null;
  pagingEnabled?: boolean | null;
  persistentScrollbar?: boolean | null;
  pinchGestureEnabled?: boolean | null;
  scrollEnabled?: boolean | null;
  scrollEventThrottle?: number | null;
  scrollIndicatorInsets?: EdgeInsetsProp | null;
  scrollPerfTag?: string | null;
  scrollToOverflowEnabled?: boolean | null;
  scrollsToTop?: boolean | null;
  sendMomentumEvents?: boolean | null;
  showsHorizontalScrollIndicator?: boolean | null;
  showsVerticalScrollIndicator?: boolean | null;
  snapToAlignment?: ("start" | "center" | "end") | null;
  snapToEnd?: boolean | null;
  snapToInterval?: number | null;
  snapToOffsets?: ReadonlyArray<number> | null;
  snapToStart?: boolean | null;
  zoomScale?: number | null;
  DEPRECATED_sendUpdatedChildFrames?: boolean | null;
  // Overrides
  style?: ({} & ViewStyleProp) | DangerouslyImpreciseStyle;
  onResponderGrant?: ((e: any) => void | boolean) | null;
} & ViewProps>;
export type ScrollViewNativeComponentType = HostComponent<ScrollViewNativeProps>;