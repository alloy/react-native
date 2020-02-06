/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

export type CapturedError = {
  readonly componentName: string | null | undefined;
  readonly componentStack: string;
  readonly error: unknown;
  readonly errorBoundary: {} | null | undefined;
  readonly errorBoundaryFound: boolean;
  readonly errorBoundaryName: string | null;
  readonly willRetry: boolean;

};

import { ExtendedError } from "./Devtools/parseErrorStack";

import { handleException, SyntheticError } from "./ExceptionsManager";

/**
 * Intercept lifecycle errors and ensure they are shown with the correct stack
 * trace within the native redbox component.
 */
function showErrorDialog(capturedError: CapturedError): boolean {
  const {
    componentStack,
    error
  } = capturedError;

  let errorToHandle;

  // Typically Errors are thrown but eg strings or null can be thrown as well.
  if (error instanceof Error) {
    errorToHandle = (error as ExtendedError);
  } else if (typeof error === 'string') {
    errorToHandle = (new SyntheticError(error) as ExtendedError);
  } else {
    errorToHandle = (new SyntheticError('Unspecified error') as ExtendedError);
  }
  try {
    errorToHandle.componentStack = componentStack;
    errorToHandle.isComponentError = true;
  } catch (e) {}
  handleException(errorToHandle, false);

  // Return false here to prevent ReactFiberErrorLogger default behavior of
  // logging error details to console.error. Calls to console.error are
  // automatically routed to the native redbox controller, which we've already
  // done above by calling ExceptionsManager.
  return false;
}

export default { showErrorDialog };
