yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/DeprecatedPropTypes/DeprecatedPointPropType.js
'use strict';












const PropTypes = require('prop-types');

const PointPropType: React$PropType$Primitive<{
  x?: number;
  y?: number;

}> = PropTypes.shape({
  x: PropTypes.number,
  y: PropTypes.number
});

module.exports = PointPropType;
Done in 0.47s.
