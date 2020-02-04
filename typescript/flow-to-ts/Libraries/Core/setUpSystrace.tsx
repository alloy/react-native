yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Core/setUpSystrace.js
'use strict';












/**
 * Set up Systrace profiling hooks if necessary.
 * You can use this module directly, or just require InitializeCore.
 */
if (global.__RCTProfileIsProfiling) {
  const Systrace = require('../Performance/Systrace');
  Systrace.installReactHook();
  Systrace.setEnabled(true);
}
Done in 0.45s.
