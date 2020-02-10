declare type LogLevel = "trace" | "info" | "warn" | "log" | "group" | "groupCollapsed" | "groupEnd" | "debug";
export declare type HMRClientNativeInterface = {
    enable(): void;
    disable(): void;
    registerBundle(requestUrl: string): void;
    log(level: LogLevel, data: Array<unknown>): void;
    setup(platform: string, bundleEntry: string, host: string, port: number | string, isEnabled: boolean): void;
};
/**
 * HMR Client that receives from the server HMR updates and propagates them
 * runtime to reflects those changes.
 */
declare const HMRClient: HMRClientNativeInterface;
export default HMRClient;
