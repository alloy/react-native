'use strict';












import * as React from "react";

const FlatList = require('../../../Lists/FlatList');

const createAnimatedComponent = require('../createAnimatedComponent');

/**
 * @see https://github.com/facebook/react-native/commit/b8c8562
 */
const FlatListWithEventThrottle = React.forwardRef((props, ref) => <FlatList scrollEventThrottle={0.0001} {...props} ref={ref} />);

module.exports = (createAnimatedComponent(FlatListWithEventThrottle) as $FlowFixMe);
