yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/warnOnce.js
'use strict';












const warning = require('fbjs/lib/warning');

const warnedKeys: {
  [key: string]: boolean;
} = {};

/**
 * A simple function that prints a warning message once per session.
 *
 * @param {string} key - The key used to ensure the message is printed once.
 *                       This should be unique to the callsite.
 * @param {string} message - The message to print
 */
function warnOnce(key: string, message: string) {
  if (warnedKeys[key]) {
    return;
  }

  warning(false, message);

  warnedKeys[key] = true;
}

module.exports = warnOnce;
Done in 0.51s.
