/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict
 */
'use strict';

export type Rect = Readonly<{
  bottom?: number | null;
  left?: number | null;
  right?: number | null;
  top?: number | null;
}>;
export type RectOrSize = Rect | number;
export function createSquare(size: number): Rect {
  return {
    bottom: size,
    left: size,
    right: size,
    top: size
  };
}
export function normalizeRect(rectOrSize?: RectOrSize | null): Rect | undefined | null {
  return typeof rectOrSize === 'number' ? createSquare(rectOrSize) : rectOrSize;
}