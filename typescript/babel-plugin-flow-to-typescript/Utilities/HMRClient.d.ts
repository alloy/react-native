declare type LogLevel = "trace" | "info" | "warn" | "log" | "group" | "groupCollapsed" | "groupEnd" | "debug";
export declare type HMRClientNativeInterface = {
    enable(): void;
    disable(): void;
    registerBundle(requestUrl: string): void;
    log(level: LogLevel, data: Array<unknown>): void;
    setup(platform: string, bundleEntry: string, host: string, port: number | string, isEnabled: boolean): void;
};
export {};
