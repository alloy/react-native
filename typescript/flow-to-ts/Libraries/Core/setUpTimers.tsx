yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Core/setUpTimers.js
'use strict';












// In bridgeless mode, timers are host functions installed from cpp.
if (!global.RN$Bridgeless) {
  const {
    polyfillGlobal
  } = require('../Utilities/PolyfillFunctions');

  /**
   * Set up timers.
   * You can use this module directly, or just require InitializeCore.
   */
  const defineLazyTimer = name => {
    polyfillGlobal(name, () => require('./Timers/JSTimers')[name]);
  };
  defineLazyTimer('setTimeout');
  defineLazyTimer('setInterval');
  defineLazyTimer('setImmediate');
  defineLazyTimer('clearTimeout');
  defineLazyTimer('clearInterval');
  defineLazyTimer('clearImmediate');
  defineLazyTimer('requestAnimationFrame');
  defineLazyTimer('cancelAnimationFrame');
  defineLazyTimer('requestIdleCallback');
  defineLazyTimer('cancelIdleCallback');
}
Done in 0.47s.
