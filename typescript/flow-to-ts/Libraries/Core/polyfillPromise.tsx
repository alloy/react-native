yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Core/polyfillPromise.js
'use strict';












const {
  polyfillGlobal
} = require('../Utilities/PolyfillFunctions');

/**
 * Set up Promise. The native Promise implementation throws the following error:
 * ERROR: Event loop not supported.
 *
 * If you don't need these polyfills, don't use InitializeCore; just directly
 * require the modules you need from InitializeCore for setup.
 */
polyfillGlobal('Promise', () => require('../Promise'));
Done in 0.49s.
