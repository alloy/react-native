yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/DeprecatedPropTypes/DeprecatedTransformPropTypes.js
'use strict';












const ReactPropTypes = require('prop-types');

const deprecatedPropType = require('../Utilities/deprecatedPropType');

const TransformMatrixPropType = function (props: Object, propName: string, componentName: string): Error | null | undefined {
  if (props[propName]) {
    return new Error('The transformMatrix style property is deprecated. ' + 'Use `transform: [{ matrix: ... }]` instead.');
  }
};

const DecomposedMatrixPropType = function (props: Object, propName: string, componentName: string): Error | null | undefined {
  if (props[propName]) {
    return new Error('The decomposedMatrix style property is deprecated. ' + 'Use `transform: [...]` instead.');
  }
};

const DeprecatedTransformPropTypes = {
  transform: (ReactPropTypes.arrayOf(ReactPropTypes.oneOfType([ReactPropTypes.shape({ perspective: ReactPropTypes.number }), ReactPropTypes.shape({ rotate: ReactPropTypes.string }), ReactPropTypes.shape({ rotateX: ReactPropTypes.string }), ReactPropTypes.shape({ rotateY: ReactPropTypes.string }), ReactPropTypes.shape({ rotateZ: ReactPropTypes.string }), ReactPropTypes.shape({ scale: ReactPropTypes.number }), ReactPropTypes.shape({ scaleX: ReactPropTypes.number }), ReactPropTypes.shape({ scaleY: ReactPropTypes.number }), ReactPropTypes.shape({ translateX: ReactPropTypes.number }), ReactPropTypes.shape({ translateY: ReactPropTypes.number }), ReactPropTypes.shape({ skewX: ReactPropTypes.string }), ReactPropTypes.shape({ skewY: ReactPropTypes.string })])) as React$PropType$Primitive<Array<{perspective?: number;} | {rotate?: string;} | {rotateX?: string;} | {rotateY?: string;} | {rotateZ?: string;} | {scale?: number;} | {scaleX?: number;} | {scaleY?: number;} | {translateX?: number;} | {translateY?: number;} | {skewX?: string;} | {skewY?: string;}>>),
  transformMatrix: TransformMatrixPropType,
  decomposedMatrix: DecomposedMatrixPropType,
  scaleX: (deprecatedPropType(ReactPropTypes.number, 'Use the transform prop instead.') as ReactPropsCheckType),
  scaleY: (deprecatedPropType(ReactPropTypes.number, 'Use the transform prop instead.') as ReactPropsCheckType),
  rotation: (deprecatedPropType(ReactPropTypes.number, 'Use the transform prop instead.') as ReactPropsCheckType),
  translateX: (deprecatedPropType(ReactPropTypes.number, 'Use the transform prop instead.') as ReactPropsCheckType),
  translateY: (deprecatedPropType(ReactPropTypes.number, 'Use the transform prop instead.') as ReactPropsCheckType)
};

module.exports = DeprecatedTransformPropTypes;
Done in 0.53s.
