yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Types/CoreEventTypes.js
'use strict';
import { $ReadOnly, $PropertyType } from "utility-types";












import * as React from "react";
import { HostComponent } from "../Renderer/shims/ReactNativeTypes";

export type SyntheticEvent<T> = $ReadOnly<{
  bubbles: boolean | null | undefined;
  cancelable: boolean | null | undefined;
  currentTarget: number | React.ElementRef<HostComponent<unknown>>;
  defaultPrevented: boolean | null | undefined;
  dispatchConfig: $ReadOnly<{
    registrationName: string;
  }>;
  eventPhase: number | null | undefined;
  preventDefault: () => void;
  isDefaultPrevented: () => boolean;
  stopPropagation: () => void;
  isPropagationStopped: () => boolean;
  isTrusted: boolean | null | undefined;
  nativeEvent: T;
  persist: () => void;
  target: (number | null | undefined) | React.ElementRef<HostComponent<unknown>>;
  timeStamp: number;
  type: string | null | undefined;
}>;

export type ResponderSyntheticEvent<T> = $ReadOnly<React.SyntheticEvent<T> & {
  touchHistory: $ReadOnly<{
    indexOfSingleActiveTouch: number;
    mostRecentTimeStamp: number;
    numberActiveTouches: number;
    touchBank: ReadonlyArray<$ReadOnly<{
      touchActive: boolean;
      startPageX: number;
      startPageY: number;
      startTimeStamp: number;
      currentPageX: number;
      currentPageY: number;
      currentTimeStamp: number;
      previousPageX: number;
      previousPageY: number;
      previousTimeStamp: number;
    }>>;
  }>;
}>;

export type Layout = $ReadOnly<{
  x: number;
  y: number;
  width: number;
  height: number;
}>;

export type TextLayout = $ReadOnly<Layout & {
  ascender: number;
  capHeight: number;
  descender: number;
  text: string;
  xHeight: number;
}>;

export type LayoutEvent = React.SyntheticEvent<$ReadOnly<{
  layout: Layout;
}>>;

export type TextLayoutEvent = React.SyntheticEvent<$ReadOnly<{
  lines: Array<TextLayout>;
}>>;

export type PressEvent = ResponderSyntheticEvent<$ReadOnly<{
  changedTouches: ReadonlyArray<$PropertyType<PressEvent, "nativeEvent">>;
  force: number;
  identifier: number;
  locationX: number;
  locationY: number;
  pageX: number;
  pageY: number;
  target: number | null | undefined;
  timestamp: number;
  touches: ReadonlyArray<$PropertyType<PressEvent, "nativeEvent">>;
}>>;

export type ScrollEvent = React.SyntheticEvent<$ReadOnly<{
  contentInset: $ReadOnly<{
    bottom: number;
    left: number;
    right: number;
    top: number;
  }>;
  contentOffset: $ReadOnly<{
    y: number;
    x: number;
  }>;
  contentSize: $ReadOnly<{
    height: number;
    width: number;
  }>;
  layoutMeasurement: $ReadOnly<{
    height: number;
    width: number;
  }>;
  targetContentOffset?: $ReadOnly<{
    y: number;
    x: number;
  }>;
  velocity?: $ReadOnly<{
    y: number;
    x: number;
  }>;
  zoomScale?: number;
  responderIgnoreScroll?: boolean;
}>>;

export type BlurEvent = React.SyntheticEvent<$ReadOnly<{
  target: number;
}>>;

export type FocusEvent = React.SyntheticEvent<$ReadOnly<{
  target: number;
}>>;

export type MouseEvent = React.SyntheticEvent<$ReadOnly<{
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
  timestamp: number;
}>>;
Done in 0.71s.
