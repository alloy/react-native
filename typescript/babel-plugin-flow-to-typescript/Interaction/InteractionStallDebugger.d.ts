declare const BridgeSpyStallHandler: any;
declare const JSEventLoopWatchdog: any;
declare const InteractionStallDebugger: {
    install(options: {
        thresholdMS: number;
    }): void;
};
