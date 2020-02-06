'use strict';;
import _Import0 from '../Utilities/PolyfillFunctions';

const {
  polyfillGlobal
} = _Import0;

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
