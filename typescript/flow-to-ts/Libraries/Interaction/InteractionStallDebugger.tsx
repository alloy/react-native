'use strict';;
import BridgeSpyStallHandler from './BridgeSpyStallHandler';
import JSEventLoopWatchdog from './JSEventLoopWatchdog';

const InteractionStallDebugger = {
  install(options: {thresholdMS: number;}): void {
    JSEventLoopWatchdog.install(options);
    BridgeSpyStallHandler.register();
  }
};

export default InteractionStallDebugger;
