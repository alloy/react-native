'use strict';;
import ScrollView from '../../../Components/ScrollView/ScrollView';
import createAnimatedComponent from '../createAnimatedComponent';












import * as React from "react";

/**
 * @see https://github.com/facebook/react-native/commit/b8c8562
 */
const ScrollViewWithEventThrottle = React.forwardRef((props, ref) => <ScrollView scrollEventThrottle={0.0001} {...props} ref={ref} />);

export default createAnimatedComponent(ScrollViewWithEventThrottle) as $FlowFixMe;;
