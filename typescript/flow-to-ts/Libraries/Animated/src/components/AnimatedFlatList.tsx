'use strict';;
import FlatList from '../../../Lists/FlatList';
import createAnimatedComponent from '../createAnimatedComponent';












import * as React from "react";

/**
 * @see https://github.com/facebook/react-native/commit/b8c8562
 */
const FlatListWithEventThrottle = React.forwardRef((props, ref) => <FlatList scrollEventThrottle={0.0001} {...props} ref={ref} />);

export default createAnimatedComponent(FlatListWithEventThrottle) as $FlowFixMe;;
