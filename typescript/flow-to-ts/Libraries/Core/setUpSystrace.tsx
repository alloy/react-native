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
