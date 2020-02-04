yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Core/setUpErrorHandling.js
'use strict';












/**
 * Sets up the console and exception handling (redbox) for React Native.
 * You can use this module directly, or just require InitializeCore.
 */
const ExceptionsManager = require('./ExceptionsManager');
ExceptionsManager.installConsoleErrorReporter();

// Set up error handler
if (!global.__fbDisableExceptionsManager) {
  const handleError = (e, isFatal) => {
    try {
      ExceptionsManager.handleException(e, isFatal);
    } catch (ee) {
      console.log('Failed to print error: ', ee.message);
      throw e;
    }
  };

  const ErrorUtils = require('../vendor/core/ErrorUtils');
  ErrorUtils.setGlobalHandler(handleError);
}
Done in 0.49s.
