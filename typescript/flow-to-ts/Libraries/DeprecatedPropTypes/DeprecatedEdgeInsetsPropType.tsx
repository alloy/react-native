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
