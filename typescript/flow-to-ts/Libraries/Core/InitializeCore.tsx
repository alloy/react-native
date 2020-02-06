'use strict';;
import GlobalPerformanceLogger from '../Utilities/GlobalPerformanceLogger';
const start = Date.now();

import './setUpGlobals';
import './setUpSystrace';
import './setUpErrorHandling';
import './polyfillPromise';
import './setUpRegeneratorRuntime';
import './setUpTimers';
import './setUpXHR';
import './setUpAlert';
import './setUpNavigator';
import './setUpBatchedBridge';
import './setUpSegmentFetcher';
if (__DEV__) {
  require('./checkNativeVersion');
  require('./setUpDeveloperTools');
}

// We could just call GlobalPerformanceLogger.markPoint at the top of the file,
// but then we'd be excluding the time it took to require the logger.
// Instead, we just use Date.now and backdate the timestamp.
GlobalPerformanceLogger.markPoint('initializeCore_start', GlobalPerformanceLogger.currentTimestamp() - (Date.now() - start));
GlobalPerformanceLogger.markPoint('initializeCore_end');
