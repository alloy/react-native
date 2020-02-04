'use strict';












import * as React from "react";

const ScrollView = require('../../../Components/ScrollView/ScrollView');

const createAnimatedComponent = require('../createAnimatedComponent');

/**
 * @see https://github.com/facebook/react-native/commit/b8c8562
 */
const ScrollViewWithEventThrottle = React.forwardRef((props, ref) => <ScrollView scrollEventThrottle={0.0001} {...props} ref={ref} />);

module.exports = (createAnimatedComponent(ScrollViewWithEventThrottle) as $FlowFixMe);
