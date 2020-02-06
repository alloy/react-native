'use strict';;
import SectionList from '../../../Lists/SectionList';
import createAnimatedComponent from '../createAnimatedComponent';
import * as React from "react";

/**
 * @see https://github.com/facebook/react-native/commit/b8c8562
 */
const SectionListWithEventThrottle = React.forwardRef((props, ref) => <SectionList scrollEventThrottle={0.0001} {...props} ref={ref} />);

export default createAnimatedComponent(SectionListWithEventThrottle) as $FlowFixMe;
