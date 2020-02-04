yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Core/setUpRegeneratorRuntime.js
'use strict';












const {
  polyfillGlobal
} = require('../Utilities/PolyfillFunctions');

/**
 * Set up regenerator.
 * You can use this module directly, or just require InitializeCore.
 */
polyfillGlobal('regeneratorRuntime', () => {
  // The require just sets up the global, so make sure when we first
  // invoke it the global does not exist
  delete global.regeneratorRuntime;

  // regenerator-runtime/runtime exports the regeneratorRuntime object, so we
  // can return it safely.
  return require('regenerator-runtime/runtime'); // flowlint-line untyped-import:off
});
Done in 0.49s.
