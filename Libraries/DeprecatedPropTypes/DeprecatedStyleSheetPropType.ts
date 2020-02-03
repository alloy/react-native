'use strict';












const deprecatedCreateStrictShapeTypeChecker = require('./deprecatedCreateStrictShapeTypeChecker');
const flattenStyle = require('../StyleSheet/flattenStyle');

function DeprecatedStyleSheetPropType(shape: {
  [key: string]: ReactPropsCheckType;
}): ReactPropsCheckType {
  const shapePropType = deprecatedCreateStrictShapeTypeChecker(shape);
  return function (props, propName, componentName, location?, ...rest) {
    let newProps = props;
    if (props[propName]) {
      // Just make a dummy prop object with only the flattened style
      newProps = {};
      newProps[propName] = flattenStyle(props[propName]);
    }
    return shapePropType(newProps, propName, componentName, location, ...rest);
  };
}

module.exports = DeprecatedStyleSheetPropType;