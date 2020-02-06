'use strict';;
const AnimatedImplementation = require('./AnimatedImplementation');

export default {
  ...AnimatedImplementation,
  // $FlowFixMe createAnimatedComponent expects to receive types. Plain intrinsic components can't be typed like this
  div: (AnimatedImplementation.createAnimatedComponent('div') as $FlowFixMe),
  // $FlowFixMe createAnimatedComponent expects to receive types. Plain intrinsic components can't be typed like this
  span: (AnimatedImplementation.createAnimatedComponent('span') as $FlowFixMe),
  // $FlowFixMe createAnimatedComponent expects to receive types. Plain intrinsic components can't be typed like this
  img: (AnimatedImplementation.createAnimatedComponent('img') as $FlowFixMe)
};
