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

import * as React from 'react';
import { HostComponent } from '../Renderer/shims/ReactNativeTypes';
export type SyntheticEvent<T> = Readonly<{
  bubbles: boolean | undefined | null;
  cancelable: boolean | undefined | null;
  currentTarget: number | React.ElementRef<HostComponent<unknown>>;
  defaultPrevented: boolean | undefined | null;
  dispatchConfig: Readonly<{
    registrationName: string;
  }>;
  eventPhase: number | undefined | null;
  preventDefault: () => void;
  isDefaultPrevented: () => boolean;
  stopPropagation: () => void;
  isPropagationStopped: () => boolean;
  isTrusted: boolean | undefined | null;
  nativeEvent: T;
  persist: () => void;
  target: (number | undefined | null) | React.ElementRef<HostComponent<unknown>>;
  timeStamp: number;
  type: string | undefined | null;
}>;
export type ResponderSyntheticEvent<T> = Readonly<{
  touchHistory: Readonly<{
    indexOfSingleActiveTouch: number;
    mostRecentTimeStamp: number;
    numberActiveTouches: number;
    touchBank: ReadonlyArray<Readonly<{
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
} & SyntheticEvent<T>>;
export type Layout = Readonly<{
  x: number;
  y: number;
  width: number;
  height: number;
}>;
export type TextLayout = Readonly<{
  ascender: number;
  capHeight: number;
  descender: number;
  text: string;
  xHeight: number;
} & Layout>;
export type LayoutEvent = SyntheticEvent<Readonly<{
  layout: Layout;
}>>;
export type TextLayoutEvent = SyntheticEvent<Readonly<{
  lines: Array<TextLayout>;
}>>;
export type PressEvent = ResponderSyntheticEvent<Readonly<{
  changedTouches: ReadonlyArray<PressEvent["nativeEvent"]>;
  force: number;
  identifier: number;
  locationX: number;
  locationY: number;
  pageX: number;
  pageY: number;
  target: number | undefined | null;
  timestamp: number;
  touches: ReadonlyArray<PressEvent["nativeEvent"]>;
}>>;
export type ScrollEvent = SyntheticEvent<Readonly<{
  contentInset: Readonly<{
    bottom: number;
    left: number;
    right: number;
    top: number;
  }>;
  contentOffset: Readonly<{
    y: number;
    x: number;
  }>;
  contentSize: Readonly<{
    height: number;
    width: number;
  }>;
  layoutMeasurement: Readonly<{
    height: number;
    width: number;
  }>;
  targetContentOffset?: Readonly<{
    y: number;
    x: number;
  }>;
  velocity?: Readonly<{
    y: number;
    x: number;
  }>;
  zoomScale?: number;
  responderIgnoreScroll?: boolean;
}>>;
export type BlurEvent = SyntheticEvent<Readonly<{
  target: number;
}>>;
export type FocusEvent = SyntheticEvent<Readonly<{
  target: number;
}>>;
export type MouseEvent = SyntheticEvent<Readonly<{
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
  timestamp: number;
}>>;