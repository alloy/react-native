'use strict';;
import Systrace from '../Performance/Systrace';












/**
 * Set up Systrace profiling hooks if necessary.
 * You can use this module directly, or just require InitializeCore.
 */
if (global.__RCTProfileIsProfiling) {
 Systrace.installReactHook();
 Systrace.setEnabled(true);
}
