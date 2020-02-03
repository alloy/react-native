declare const invariant: any;
declare const levelsMap: {
    log: string;
    info: string;
    warn: string;
    error: string;
    fatal: string;
};
declare let warningHandler: (arg0: Array<any>) => void | null | undefined;
declare const RCTLog: {
    logIfNoNativeHook(level: string, ...args: any[]): void;
    logToConsole(level: string, ...args: any[]): void;
    setWarningHandler(handler: (arg0: any[]) => void): void;
};
