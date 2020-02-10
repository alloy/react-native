import * as React from "react";
import { IPerformanceLogger } from "./createPerformanceLogger";
/**
 * This is a React Context that provides a scoped instance of IPerformanceLogger.
 * We wrap every <AppContainer /> with a Provider for this context so the logger
 * should be available in every component.
 * See React docs about using Context: https://reactjs.org/docs/context.html
 */
declare const PerformanceLoggerContext: React.Context<IPerformanceLogger>;
export default PerformanceLoggerContext;
