'use strict';
import { $ReadOnly } from "utility-types";












import normalizeColor from "../StyleSheet/normalizeColor.js";
import Touchable from "../Components/Touchable/Touchable";
import View from "../Components/View/View";
import * as React from "react";

type Props = $ReadOnly<{
  color: string;
  hitSlop: $ReadOnly<{
    bottom?: number | null | undefined;
    left?: number | null | undefined;
    right?: number | null | undefined;
    top?: number | null | undefined;
  }> | null | undefined;
}>;

/**
 * Displays a debug overlay to visualize press targets when enabled via the
 * React Native Inspector. Calls to this module should be guarded by `__DEV__`,
 * for example:
 *
 *   return (
 *     <View>
 *       {children}
 *       {__DEV__ ? (
 *         <PressabilityDebugView color="..." hitSlop={props.hitSlop} />
 *       ) : null}
 *     </View>
 *   );
 *
 */
export function PressabilityDebugView({
  color,
  hitSlop
}: Props): React.ReactNode {
  if (__DEV__) {
    if (isEnabled()) {
      const baseColor = '#' + (normalizeColor(color) ?? 0).toString(16).padStart(8, '0');

      return <View pointerEvents="none" style={{
        backgroundColor: baseColor.slice(0, -2) + '0F', // 15%
        borderColor: baseColor.slice(0, -2) + '55', // 85%
        borderStyle: 'dashed',
        borderWidth: 1,
        bottom: -(hitSlop?.bottom ?? 0),
        left: -(hitSlop?.left ?? 0),
        position: 'absolute',
        right: -(hitSlop?.right ?? 0),
        top: -(hitSlop?.top ?? 0)
      }} />;
    }
  }
  return null;
}

export function isEnabled(): boolean {
  if (__DEV__) {
    return Touchable.TOUCH_TARGET_DEBUG;
  }
  return false;
}