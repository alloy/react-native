yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Core/InitializeCore.js
'use strict';




























const start = Date.now();

require('./setUpGlobals');
require('./setUpSystrace');
require('./setUpErrorHandling');
require('./polyfillPromise');
require('./setUpRegeneratorRuntime');
require('./setUpTimers');
require('./setUpXHR');
require('./setUpAlert');
require('./setUpNavigator');
require('./setUpBatchedBridge');
require('./setUpSegmentFetcher');
if (__DEV__) {
  require('./checkNativeVersion');
  require('./setUpDeveloperTools');
}

const GlobalPerformanceLogger = require('../Utilities/GlobalPerformanceLogger');
// We could just call GlobalPerformanceLogger.markPoint at the top of the file,
// but then we'd be excluding the time it took to require the logger.
// Instead, we just use Date.now and backdate the timestamp.
GlobalPerformanceLogger.markPoint('initializeCore_start', GlobalPerformanceLogger.currentTimestamp() - (Date.now() - start));
GlobalPerformanceLogger.markPoint('initializeCore_end');
Done in 0.46s.
