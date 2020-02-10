import { ExceptionData } from "./NativeExceptionsManager";
declare class SyntheticError extends Error {
    name: string;
}
declare type ExceptionDecorator = ((arg0: ExceptionData) => ExceptionData);
/**
 * Allows the app to add information to the exception report before it is sent
 * to native. This API is not final.
 */
declare function unstable_setExceptionDecorator(exceptionDecorator: ExceptionDecorator | null | undefined): void;
/**
 * Logs exceptions to the (native) console and displays them
 */
declare function handleException(e: unknown, isFatal: boolean): void;
/**
 * Shows a redbox with stacktrace for all console.error messages.  Disable by
 * setting `console.reportErrorsAsExceptions = false;` in your app.
 */
declare function installConsoleErrorReporter(): void;
declare const _default: {
    handleException: typeof handleException;
    installConsoleErrorReporter: typeof installConsoleErrorReporter;
    SyntheticError: typeof SyntheticError;
    unstable_setExceptionDecorator: typeof unstable_setExceptionDecorator;
};
export default _default;
