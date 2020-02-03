/**
 * JS implementation of timer functions. Must be completely driven by an
 * external clock signal, all that's stored here is timerID, timer type, and
 * callback.
 */
export declare type JSTimerType = "setTimeout" | "setInterval" | "requestAnimationFrame" | "setImmediate" | "requestIdleCallback";
