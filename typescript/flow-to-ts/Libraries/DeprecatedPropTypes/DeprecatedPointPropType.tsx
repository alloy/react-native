'use strict';;
import PropTypes from 'prop-types';

const PointPropType: React$PropType$Primitive<{
  x?: number;
  y?: number;

}> = PropTypes.shape({
  x: PropTypes.number,
  y: PropTypes.number
});

export default PointPropType;;
