export declare type SpyData = {
    type: number;
    module: string | null | undefined;
    method: string | number;
    args: any[];
};
declare class MessageQueue {
    _lazyCallableModules: {
        [key: string]: (arg0: void) => Object;
    };
    _queue: [number[], number[], any[], number];
    _successCallbacks: Map<number, Function | null | undefined>;
    _failureCallbacks: Map<number, Function | null | undefined>;
    _callID: number;
    _lastFlush: number;
    _eventLoopStartTime: number;
    _immediatesCallback: () => void | null | undefined;
    _debugInfo: {
        [key: number]: [number, number];
    };
    _remoteModuleTable: {
        [key: number]: string;
    };
    _remoteMethodTable: {
        [key: number]: ReadonlyArray<string>;
    };
    __spy: (data: SpyData) => void | null | undefined;
    constructor();
    /**
     * Public APIs
     */
    static spy(spyOrToggle: boolean | ((data: SpyData) => void)): void;
    callFunctionReturnFlushedQueue(module: string, method: string, args: any[]): null | [Array<number>, Array<number>, Array<any>, number];
    callFunctionReturnResultAndFlushedQueue(module: string, method: string, args: any[]): $TEMPORARY$array<[Array<number>, Array<number>, Array<any>, number] | null | undefined>;
    invokeCallbackAndReturnFlushedQueue(cbID: number, args: any[]): null | [Array<number>, Array<number>, Array<any>, number];
    flushedQueue(): null | [Array<number>, Array<number>, Array<any>, number];
    getEventLoopRunningTime(): number;
    registerCallableModule(name: string, module: Object): void;
    registerLazyCallableModule(name: string, factory: (arg0: void) => Object): void;
    getCallableModule(name: string): any | null;
    callNativeSyncHook(moduleID: number, methodID: number, params: any[], onFail: Function | null | undefined, onSucc: Function | null | undefined): any;
    processCallbacks(moduleID: number, methodID: number, params: any[], onFail: Function | null | undefined, onSucc: Function | null | undefined): void;
    enqueueNativeCall(moduleID: number, methodID: number, params: any[], onFail: Function | null | undefined, onSucc: Function | null | undefined): void;
    createDebugLookup(moduleID: number, name: string, methods: ReadonlyArray<string> | null | undefined): void;
    setImmediatesCallback(fn: () => void): void;
    /**
     * Private methods
     */
    __guard(fn: () => void): void;
    __shouldPauseOnThrow(): boolean;
    __callImmediates(): void;
    __callFunction(module: string, method: string, args: any[]): any;
    __invokeCallback(cbID: number, args: any[]): void;
}
export default MessageQueue;
