declare const invariant: any;
declare const TRACE_TAG_REACT_APPS: number;
declare const TRACE_TAG_JS_VM_CALLS: number;
declare let _enabled: boolean;
declare let _asyncCookie: number;
declare const _markStack: any[];
declare let _markStackIndex: number;
declare let _canInstallReactHook: boolean;
declare const REACT_MARKER = "\u269B";
declare const userTimingPolyfill: {
    mark(markName: string): void;
    measure(measureName: string, startMark: string, endMark: string): void;
    clearMarks(markName: string): void;
    clearMeasures(): void;
};
declare const Systrace: {
    installReactHook(): void;
    setEnabled(enabled: boolean): void;
    isEnabled(): boolean;
    /**
     * beginEvent/endEvent for starting and then ending a profile within the same call stack frame
     **/
    beginEvent(profileName?: any, args?: any): void;
    endEvent(): void;
    /**
     * beginAsyncEvent/endAsyncEvent for starting and then ending a profile where the end can either
     * occur on another thread or out of the current stack frame, eg await
     * the returned cookie variable should be used as input into the endAsyncEvent call to end the profile
     **/
    beginAsyncEvent(profileName?: any): any;
    endAsyncEvent(profileName?: any, cookie?: any): void;
    /**
     * counterEvent registers the value to the profileName on the systrace timeline
     **/
    counterEvent(profileName?: any, value?: any): void;
};
