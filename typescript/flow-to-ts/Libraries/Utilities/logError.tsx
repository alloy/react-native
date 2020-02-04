yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/logError.js
'use strict';












/**
 * Small utility that can be used as an error handler. You cannot just pass
 * `console.error` as a failure callback - it's not properly bound.  If passes an
 * `Error` object, it will print the message and stack.
 */
const logError = function (...args: ReadonlyArray<unknown>) {
  if (args.length === 1 && args[0] instanceof Error) {
    const err = args[0];
    console.error('Error: "' + err.message + '".  Stack:\n' + err.stack);
  } else {
    console.error.apply(console, args);
  }
};

module.exports = logError;
Done in 0.53s.
