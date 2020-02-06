'use strict';;
import ExceptionsManager from './ExceptionsManager';
import ErrorUtils from '../vendor/core/ErrorUtils';
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

  ErrorUtils.setGlobalHandler(handleError);
}
