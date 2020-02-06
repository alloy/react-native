'use strict';;
import createPerformanceLogger from './createPerformanceLogger';

import { IPerformanceLogger } from "./createPerformanceLogger";

/**
 * This is a global shared instance of IPerformanceLogger that is created with
 * createPerformanceLogger().
 * This logger should be used only for global performance metrics like the ones
 * that are logged during loading bundle. If you want to log something from your
 * React component you should use PerformanceLoggerContext instead.
 */
const GlobalPerformanceLogger: IPerformanceLogger = createPerformanceLogger();

export default GlobalPerformanceLogger;
