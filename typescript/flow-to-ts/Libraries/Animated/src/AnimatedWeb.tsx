yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Animated/src/AnimatedWeb.js
'use strict';












const AnimatedImplementation = require('./AnimatedImplementation');

module.exports = {
  ...AnimatedImplementation,
  // $FlowFixMe createAnimatedComponent expects to receive types. Plain intrinsic components can't be typed like this
  div: (AnimatedImplementation.createAnimatedComponent('div') as $FlowFixMe),
  // $FlowFixMe createAnimatedComponent expects to receive types. Plain intrinsic components can't be typed like this
  span: (AnimatedImplementation.createAnimatedComponent('span') as $FlowFixMe),
  // $FlowFixMe createAnimatedComponent expects to receive types. Plain intrinsic components can't be typed like this
  img: (AnimatedImplementation.createAnimatedComponent('img') as $FlowFixMe)
};
Done in 0.46s.
