yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Animated/src/components/AnimatedFlatList.js
'use strict';












import * as React from "react";

const FlatList = require('../../../Lists/FlatList');

const createAnimatedComponent = require('../createAnimatedComponent');

/**
 * @see https://github.com/facebook/react-native/commit/b8c8562
 */
const FlatListWithEventThrottle = React.forwardRef((props, ref) => <FlatList scrollEventThrottle={0.0001} {...props} ref={ref} />);

module.exports = (createAnimatedComponent(FlatListWithEventThrottle) as $FlowFixMe);
Done in 0.48s.
