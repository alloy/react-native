'use strict';;
import _Import0 from '../Alert/Alert';












/**
 * Set up alert().
 * You can use this module directly, or just require InitializeCore.
 */
if (!global.alert) {
  global.alert = function (text) {
    // Require Alert on demand. Requiring it too early can lead to issues
    // with things like Platform not being fully initialized.
    _Import0.alert('Alert', '' + text);
  };
}
