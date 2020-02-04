yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Performance/SamplingProfiler.js
'use strict';












const SamplingProfiler = {
  poke: function (token: number): void {
    let error = null;
    let result = null;
    try {
      result = global.pokeSamplingProfiler();
      if (result === null) {
        console.log('The JSC Sampling Profiler has started');
      } else {
        console.log('The JSC Sampling Profiler has stopped');
      }
    } catch (e) {
      console.log('Error occurred when restarting Sampling Profiler: ' + e.toString());
      error = e.toString();
    }

    const NativeJSCSamplingProfiler = require('./NativeJSCSamplingProfiler').default;
    if (NativeJSCSamplingProfiler) {
      NativeJSCSamplingProfiler.operationComplete(token, result, error);
    }
  }
};

module.exports = SamplingProfiler;
Done in 0.50s.
