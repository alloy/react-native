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
 return null as any;
}

export default { showErrorDialog };;
