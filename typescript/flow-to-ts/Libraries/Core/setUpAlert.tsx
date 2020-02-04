yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Core/setUpAlert.js
'use strict';












/**
 * Set up alert().
 * You can use this module directly, or just require InitializeCore.
 */
if (!global.alert) {
  global.alert = function (text) {
    // Require Alert on demand. Requiring it too early can lead to issues
    // with things like Platform not being fully initialized.
    require('../Alert/Alert').alert('Alert', '' + text);
  };
}
Done in 0.51s.
