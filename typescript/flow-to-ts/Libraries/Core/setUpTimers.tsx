'use strict';;
import _Import0 from '../Utilities/PolyfillFunctions';
import _Import1 from './Timers/JSTimers';












// In bridgeless mode, timers are host functions installed from cpp.
if (!global.RN$Bridgeless) {
  const {
    polyfillGlobal
  } = _Import0;

  /**
   * Set up timers.
   * You can use this module directly, or just require InitializeCore.
   */
  const defineLazyTimer = name => {
    polyfillGlobal(name, () => _Import1[name]);
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
