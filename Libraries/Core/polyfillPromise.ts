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