yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Interaction/InteractionStallDebugger.js
'use strict';












const BridgeSpyStallHandler = require('./BridgeSpyStallHandler');
const JSEventLoopWatchdog = require('./JSEventLoopWatchdog');

const InteractionStallDebugger = {
  install(options: {thresholdMS: number;}): void {
    JSEventLoopWatchdog.install(options);
    BridgeSpyStallHandler.register();
  }
};

module.exports = InteractionStallDebugger;
Done in 0.52s.
