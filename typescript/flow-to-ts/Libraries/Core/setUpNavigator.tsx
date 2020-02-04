yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Core/setUpNavigator.js
'use strict';












const {
  polyfillObjectProperty
} = require('../Utilities/PolyfillFunctions');

let navigator = global.navigator;
if (navigator === undefined) {
  global.navigator = navigator = {};
}

// see https://github.com/facebook/react-native/issues/10881
polyfillObjectProperty(navigator, 'product', () => 'ReactNative');
Done in 0.48s.
