yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/GlobalPerformanceLogger.js
'use strict';











const createPerformanceLogger = require('./createPerformanceLogger');

import { IPerformanceLogger } from "./createPerformanceLogger";

/**
 * This is a global shared instance of IPerformanceLogger that is created with
 * createPerformanceLogger().
 * This logger should be used only for global performance metrics like the ones
 * that are logged during loading bundle. If you want to log something from your
 * React component you should use PerformanceLoggerContext instead.
 */
const GlobalPerformanceLogger: IPerformanceLogger = createPerformanceLogger();

module.exports = GlobalPerformanceLogger;
Done in 0.47s.
