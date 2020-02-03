import { TurboModule } from "../TurboModule/RCTExport";
declare type Header = [string, string];
export interface Spec extends TurboModule {
    readonly sendRequest: (method: string, url: string, requestId: number, headers: Array<Header>, data: Object, responseType: string, useIncrementalUpdates: boolean, timeout: number, withCredentials: boolean) => void;
    readonly abortRequest: (requestId: number) => void;
    readonly clearCookies: (callback: (result: boolean) => void) => void;
    readonly addListener: (eventName: string) => void;
    readonly removeListeners: (count: number) => void;
}
declare const _default: Spec;
export default _default;
