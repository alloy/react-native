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