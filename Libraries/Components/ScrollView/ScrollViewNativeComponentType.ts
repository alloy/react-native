'use strict';
import { $ReadOnly } from "utility-types";












import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
import { ViewStyleProp, DangerouslyImpreciseStyle } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";
import { ScrollEvent } from "../../Types/CoreEventTypes";
import { PointProp } from "../../StyleSheet/PointPropType";

export type ScrollViewNativeProps = $ReadOnly<ViewProps & {
  alwaysBounceHorizontal?: boolean | null | undefined;
  alwaysBounceVertical?: boolean | null | undefined;
  automaticallyAdjustContentInsets?: boolean | null | undefined;
  bounces?: boolean | null | undefined;
  bouncesZoom?: boolean | null | undefined;
  canCancelContentTouches?: boolean | null | undefined;
  centerContent?: boolean | null | undefined;
  contentInset?: EdgeInsetsProp | null | undefined;
  contentInsetAdjustmentBehavior?: ("automatic" | "scrollableAxes" | "never" | "always") | null | undefined;
  contentOffset?: PointProp | null | undefined;
  decelerationRate?: ("fast" | "normal" | number) | null | undefined;
  directionalLockEnabled?: boolean | null | undefined;
  disableIntervalMomentum?: boolean | null | undefined;
  endFillColor?: ColorValue | null | undefined;
  fadingEdgeLength?: number | null | undefined;
  indicatorStyle?: ("default" | "black" | "white") | null | undefined;
  keyboardDismissMode?: ("none" | "on-drag" | "interactive") | null | undefined;
  maintainVisibleContentPosition?: $ReadOnly<{
    minIndexForVisible: number;
    autoscrollToTopThreshold?: number | null | undefined;
  }> | null | undefined;
  maximumZoomScale?: number | null | undefined;
  minimumZoomScale?: number | null | undefined;
  nestedScrollEnabled?: boolean | null | undefined;
  onMomentumScrollBegin?: (event: ScrollEvent) => void | null | undefined;
  onMomentumScrollEnd?: (event: ScrollEvent) => void | null | undefined;
  onScroll?: (event: ScrollEvent) => void | null | undefined;
  onScrollBeginDrag?: (event: ScrollEvent) => void | null | undefined;
  onScrollEndDrag?: (event: ScrollEvent) => void | null | undefined;
  onScrollToTop?: (event: ScrollEvent) => void;
  overScrollMode?: ("auto" | "always" | "never") | null | undefined;
  pagingEnabled?: boolean | null | undefined;
  persistentScrollbar?: boolean | null | undefined;
  pinchGestureEnabled?: boolean | null | undefined;
  scrollEnabled?: boolean | null | undefined;
  scrollEventThrottle?: number | null | undefined;
  scrollIndicatorInsets?: EdgeInsetsProp | null | undefined;
  scrollPerfTag?: string | null | undefined;
  scrollToOverflowEnabled?: boolean | null | undefined;
  scrollsToTop?: boolean | null | undefined;
  sendMomentumEvents?: boolean | null | undefined;
  showsHorizontalScrollIndicator?: boolean | null | undefined;
  showsVerticalScrollIndicator?: boolean | null | undefined;
  snapToAlignment?: ("start" | "center" | "end") | null | undefined;
  snapToEnd?: boolean | null | undefined;
  snapToInterval?: number | null | undefined;
  snapToOffsets?: ReadonlyArray<number> | null | undefined;
  snapToStart?: boolean | null | undefined;
  zoomScale?: number | null | undefined;
  DEPRECATED_sendUpdatedChildFrames?: boolean | null | undefined;
  // Overrides
  style?: (ViewStyleProp) | DangerouslyImpreciseStyle;
  onResponderGrant?: (e: any) => void | boolean | null | undefined;
}>;

export type ScrollViewNativeComponentType = HostComponent<ScrollViewNativeProps>;