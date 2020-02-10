import NativeEventEmitter from '../EventEmitter/NativeEventEmitter';
import { RequestBody } from "./convertRequestBody";
/**
 * This class is a wrapper around the native RCTNetworking module. It adds a necessary unique
 * requestId to each network request that can be used to abort that request later on.
 */
declare class RCTNetworking extends NativeEventEmitter {
    constructor();
    sendRequest(method: string, trackingName: string, url: string, headers: any, data: RequestBody, responseType: "text" | "base64", incrementalUpdates: boolean, timeout: number, callback: ((requestId: number) => unknown), withCredentials: boolean): void;
    abortRequest(requestId: number): void;
    clearCookies(callback: ((result: boolean) => any)): void;
}
declare const _default: RCTNetworking;
export default _default;
