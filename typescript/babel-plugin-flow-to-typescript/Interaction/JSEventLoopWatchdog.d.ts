declare const infoLog: any;
declare const performanceNow: any;
declare type Handler = {
    onIterate?: () => void;
    onStall: (params: {
        lastInterval: number;
        busyTime: number;
    }) => string | undefined | null;
};
/**
 * A utility for tracking stalls in the JS event loop that prevent timers and
 * other events from being processed in a timely manner.
 *
 * The "stall" time is defined as the amount of time in access of the acceptable
 * threshold, which is typically around 100-200ms. So if the treshold is set to
 * 100 and a timer fires 150 ms later than it was scheduled because the event
 * loop was tied up, that would be considered a 50ms stall.
 *
 * By default, logs stall events to the console when installed. Can also be
 * queried with `getStats`.
 */
declare const JSEventLoopWatchdog: {
    getStats: () => object;
    reset: () => void;
    addHandler: (handler: Handler) => void;
    install: ({ thresholdMS }: {
        thresholdMS: number;
    }) => void;
};
declare let acceptableBusyTime: number;
declare let installed: boolean;
declare let totalStallTime: number;
declare let stallCount: number;
declare let longestStall: number;
declare let lastInterval: number;
declare const handlers: Array<Handler>;
