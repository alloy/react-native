/**
 * JS implementation of timer functions. Must be completely driven by an
 * external clock signal, all that's stored here is timerID, timer type, and
 * callback.
 */
export declare type JSTimerType = "setTimeout" | "setInterval" | "requestAnimationFrame" | "setImmediate" | "requestIdleCallback";
declare let ExportedJSTimers: {
    callIdleCallbacks: ((frameTime: number) => any | void);
    callImmediates: (() => void);
    callTimers: ((timersToCall: Array<number>) => any | void);
    cancelAnimationFrame: ((timerID: number) => void);
    cancelIdleCallback: ((timerID: number) => void);
    clearImmediate: ((timerID: number) => void);
    clearInterval: ((timerID: number) => void);
    clearTimeout: ((timerID: number) => void);
    emitTimeDriftWarning: ((warningMessage: string) => any | void);
    requestAnimationFrame: ((func: any) => any | number);
    requestIdleCallback: ((func: any, options: any | null | undefined) => any | number);
    setImmediate: ((func: any, ...args: any) => number);
    setInterval: ((func: any, duration: number, ...args: any) => number);
    setTimeout: ((func: any, duration: number, ...args: any) => number);
};
export default ExportedJSTimers;
