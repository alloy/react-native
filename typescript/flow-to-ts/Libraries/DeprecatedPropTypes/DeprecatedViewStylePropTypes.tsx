yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/DeprecatedPropTypes/DeprecatedViewStylePropTypes.js
'use strict';












const DeprecatedColorPropType = require('./DeprecatedColorPropType');
const DeprecatedLayoutPropTypes = require('./DeprecatedLayoutPropTypes');
const DeprecatedShadowPropTypesIOS = require('./DeprecatedShadowPropTypesIOS');
const DeprecatedTransformPropTypes = require('./DeprecatedTransformPropTypes');
const ReactPropTypes = require('prop-types');

/**
 * Warning: Some of these properties may not be supported in all releases.
 */
const DeprecatedViewStylePropTypes = {
  ...DeprecatedLayoutPropTypes,
  ...DeprecatedShadowPropTypesIOS,
  ...DeprecatedTransformPropTypes,
  backfaceVisibility: (ReactPropTypes.oneOf(['visible', 'hidden']) as React$PropType$Primitive<"visible" | "hidden">),
  backgroundColor: DeprecatedColorPropType,
  borderColor: DeprecatedColorPropType,
  borderTopColor: DeprecatedColorPropType,
  borderRightColor: DeprecatedColorPropType,
  borderBottomColor: DeprecatedColorPropType,
  borderLeftColor: DeprecatedColorPropType,
  borderStartColor: DeprecatedColorPropType,
  borderEndColor: DeprecatedColorPropType,
  borderRadius: ReactPropTypes.number,
  borderTopLeftRadius: ReactPropTypes.number,
  borderTopRightRadius: ReactPropTypes.number,
  borderTopStartRadius: ReactPropTypes.number,
  borderTopEndRadius: ReactPropTypes.number,
  borderBottomLeftRadius: ReactPropTypes.number,
  borderBottomRightRadius: ReactPropTypes.number,
  borderBottomStartRadius: ReactPropTypes.number,
  borderBottomEndRadius: ReactPropTypes.number,
  borderStyle: (ReactPropTypes.oneOf(['solid', 'dotted', 'dashed']) as React$PropType$Primitive<"solid" | "dotted" | "dashed">),
  borderWidth: ReactPropTypes.number,
  borderTopWidth: ReactPropTypes.number,
  borderRightWidth: ReactPropTypes.number,
  borderBottomWidth: ReactPropTypes.number,
  borderLeftWidth: ReactPropTypes.number,
  opacity: ReactPropTypes.number,

  /**
   * (Android-only) Sets the elevation of a view, using Android's underlying
   * [elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).
   * This adds a drop shadow to the item and affects z-order for overlapping views.
   * Only supported on Android 5.0+, has no effect on earlier versions.
   * @platform android
   */
  elevation: ReactPropTypes.number
};

module.exports = DeprecatedViewStylePropTypes;
Done in 0.49s.
