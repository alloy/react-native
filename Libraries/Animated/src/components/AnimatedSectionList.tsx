'use strict';












import * as React from "react";

const SectionList = require('../../../Lists/SectionList');

const createAnimatedComponent = require('../createAnimatedComponent');

/**
 * @see https://github.com/facebook/react-native/commit/b8c8562
 */
const SectionListWithEventThrottle = React.forwardRef((props, ref) => <SectionList scrollEventThrottle={0.0001} {...props} ref={ref} />);

module.exports = (createAnimatedComponent(SectionListWithEventThrottle) as $FlowFixMe);