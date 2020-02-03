import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly sendRequest: (query: {
        method: string;
        url: string;
        data: Object;
        headers: Object;
        responseType: string;
        incrementalUpdates: boolean;
        timeout: number;
        withCredentials: boolean;
    }, callback: (requestId: number) => void) => void;
    readonly abortRequest: (requestId: number) => void;
    readonly clearCookies: (callback: (result: boolean) => void) => void;
    readonly addListener: (eventName: string) => void;
    readonly removeListeners: (count: number) => void;
}
declare const _default: Spec;
export default _default;
