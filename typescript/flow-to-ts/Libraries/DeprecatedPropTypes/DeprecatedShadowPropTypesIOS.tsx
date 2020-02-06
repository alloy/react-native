'use strict';;
import DeprecatedColorPropType from './DeprecatedColorPropType';
import ReactPropTypes from 'prop-types';

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

export default DeprecatedShadowPropTypesIOS;
