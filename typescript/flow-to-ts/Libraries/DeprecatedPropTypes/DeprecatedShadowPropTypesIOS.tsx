yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/DeprecatedPropTypes/DeprecatedShadowPropTypesIOS.js
'use strict';












const DeprecatedColorPropType = require('./DeprecatedColorPropType');
const ReactPropTypes = require('prop-types');

const DeprecatedShadowPropTypesIOS = {
  shadowColor: DeprecatedColorPropType,
  shadowOffset: (ReactPropTypes.shape({
    width: ReactPropTypes.number,
    height: ReactPropTypes.number
  }) as React$PropType$Primitive<{
    height?: number;
    width?: number;

  }>),
  shadowOpacity: ReactPropTypes.number,
  shadowRadius: ReactPropTypes.number
};

module.exports = DeprecatedShadowPropTypesIOS;
Done in 0.47s.
