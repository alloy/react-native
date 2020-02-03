declare const invariant: any;
declare const levelsMap: {
    log: string;
    info: string;
    warn: string;
    error: string;
    fatal: string;
};
declare let warningHandler: ((a: Array<any>) => void) | undefined | null;
declare const RCTLog: {
    logIfNoNativeHook(level: string, ...args: any[]): void;
    logToConsole(level: string, ...args: any[]): void;
    setWarningHandler(handler: (a: any[]) => void): void;
};
