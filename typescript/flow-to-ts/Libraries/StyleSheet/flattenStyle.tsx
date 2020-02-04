yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/StyleSheet/flattenStyle.js
'use strict';












import { DangerouslyImpreciseStyle, DangerouslyImpreciseStyleProp } from "./StyleSheet";

function flattenStyle(style: DangerouslyImpreciseStyleProp | null | undefined): DangerouslyImpreciseStyle | null | undefined {
  if (style === null || typeof style !== 'object') {
    return undefined;
  }

  if (!Array.isArray(style)) {
    return style;
  }

  const result = {};
  for (let i = 0, styleLength = style.length; i < styleLength; ++i) {
    const computedStyle = flattenStyle(style[i]);
    if (computedStyle) {
      for (const key in computedStyle) {
        result[key] = computedStyle[key];
      }
    }
  }
  return result;
}

module.exports = flattenStyle;
Done in 0.49s.
