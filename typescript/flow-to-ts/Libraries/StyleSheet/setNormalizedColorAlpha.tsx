yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/StyleSheet/setNormalizedColorAlpha.js
'use strict';














/**
 * number should be a color processed by `normalizeColor`
 * alpha should be number between 0 and 1
 */
function setNormalizedColorAlpha(input: number, alpha: number): number {
  if (alpha < 0) {
    alpha = 0;
  } else if (alpha > 1) {
    alpha = 1;
  }

  alpha = Math.round(alpha * 255);
  // magic bitshift guarantees we return an unsigned int
  return (input & 0xffffff00 | alpha) >>> 0;
}

module.exports = setNormalizedColorAlpha;
Done in 0.48s.
