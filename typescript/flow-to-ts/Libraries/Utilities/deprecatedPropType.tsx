'use strict';;
import UIManager from '../ReactNative/UIManager';

/**
 * Adds a deprecation warning when the prop is used.
 */
function deprecatedPropType(propType: ReactPropsCheckType, explanation: string): ReactPropsCheckType {
  return function validate(props, propName, componentName, ...rest) {
    // Don't warn for native components.
    if (!global.RN$Bridgeless && !UIManager.getViewManagerConfig(componentName) && props[propName] !== undefined) {
      console.warn(`\`${propName}\` supplied to \`${componentName}\` has been deprecated. ${explanation}`);
    }

    return propType(props, propName, componentName, ...rest);
  };
}

export default deprecatedPropType;
