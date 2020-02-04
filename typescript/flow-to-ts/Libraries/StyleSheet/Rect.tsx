yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/StyleSheet/Rect.js
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
Done in 0.48s.
