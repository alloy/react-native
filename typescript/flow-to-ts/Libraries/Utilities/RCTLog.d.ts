declare const RCTLog: {
    logIfNoNativeHook(level: string, ...args: any[]): void;
    logToConsole(level: string, ...args: any[]): void;
    setWarningHandler(handler: ((arg0: any[]) => void) | null | undefined): void;
};
export default RCTLog;
