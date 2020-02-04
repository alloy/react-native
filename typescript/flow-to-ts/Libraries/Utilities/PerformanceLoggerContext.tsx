yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/PerformanceLoggerContext.js
'use strict';












import * as React from "react";
import GlobalPerformanceLogger from "./GlobalPerformanceLogger";
import { IPerformanceLogger } from "./createPerformanceLogger";

/**
 * This is a React Context that provides a scoped instance of IPerformanceLogger.
 * We wrap every <AppContainer /> with a Provider for this context so the logger
 * should be available in every component.
 * See React docs about using Context: https://reactjs.org/docs/context.html
 */
const PerformanceLoggerContext: React.Context<IPerformanceLogger> = React.createContext(GlobalPerformanceLogger);
module.exports = PerformanceLoggerContext;
Done in 0.47s.
