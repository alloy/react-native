'use strict';
import { $ReadOnly } from "utility-types";












export type Rect = $ReadOnly<{
  bottom?: number | null | undefined;
  left?: number | null | undefined;
  right?: number | null | undefined;
  top?: number | null | undefined;
}>;

export type RectOrSize = Rect | number;

export function createSquare(size: number): Rect {
  return { bottom: size, left: size, right: size, top: size };
}

export function normalizeRect(rectOrSize: RectOrSize | null | undefined): Rect | null | undefined {
  return typeof rectOrSize === 'number' ? createSquare(rectOrSize) : rectOrSize;
}