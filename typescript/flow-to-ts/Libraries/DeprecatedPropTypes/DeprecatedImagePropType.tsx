'use strict';;
import DeprecatedEdgeInsetsPropType from './DeprecatedEdgeInsetsPropType';
import DeprecatedImageSourcePropType from './DeprecatedImageSourcePropType';
import DeprecatedImageStylePropTypes from './DeprecatedImageStylePropTypes';
import DeprecatedStyleSheetPropType from './DeprecatedStyleSheetPropType';
import PropTypes from 'prop-types';

export default {
  style: (DeprecatedStyleSheetPropType(DeprecatedImageStylePropTypes) as ReactPropsCheckType),
  source: DeprecatedImageSourcePropType,
  defaultSource: (PropTypes.oneOfType([PropTypes.shape({
    uri: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    scale: PropTypes.number
  }), PropTypes.number]) as React$PropType$Primitive<{
    height?: number;
    scale?: number;
    uri?: string;
    width?: number;

  } | number>),

  accessible: PropTypes.bool,

  accessibilityLabel: PropTypes.node,

  blurRadius: PropTypes.number,

  capInsets: DeprecatedEdgeInsetsPropType,

  resizeMethod: (PropTypes.oneOf(['auto', 'resize', 'scale']) as React$PropType$Primitive<"auto" | "resize" | "scale">),

  resizeMode: (PropTypes.oneOf(['cover', 'contain', 'stretch', 'repeat', 'center']) as React$PropType$Primitive<"cover" | "contain" | "stretch" | "repeat" | "center">),

  testID: PropTypes.string,

  onLayout: PropTypes.func,

  onLoadStart: PropTypes.func,

  onProgress: PropTypes.func,

  onError: PropTypes.func,

  onPartialLoad: PropTypes.func,

  onLoad: PropTypes.func,

  onLoadEnd: PropTypes.func
};
