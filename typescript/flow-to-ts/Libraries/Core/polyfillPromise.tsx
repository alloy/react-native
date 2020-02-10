'use strict';;
import _Import0 from '../Utilities/PolyfillFunctions';
import _Import1 from '../Promise';












const {
  polyfillGlobal
} = _Import0;

/**
 * Set up Promise. The native Promise implementation throws the following error:
 * ERROR: Event loop not supported.
 *
 * If you don't need these polyfills, don't use InitializeCore; just directly
 * require the modules you need from InitializeCore for setup.
 */
polyfillGlobal('Promise', () => _Import1);
