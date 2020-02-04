yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/DeprecatedPropTypes/DeprecatedEdgeInsetsPropType.js
'use strict';












const PropTypes = require('prop-types');

const DeprecatedEdgeInsetsPropType: React$PropType$Primitive<{
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;

}> = PropTypes.shape({
  top: PropTypes.number,
  left: PropTypes.number,
  bottom: PropTypes.number,
  right: PropTypes.number
});

module.exports = DeprecatedEdgeInsetsPropType;
Done in 0.48s.
