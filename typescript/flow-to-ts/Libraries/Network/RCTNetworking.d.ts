import NativeEventEmitter from '../EventEmitter/NativeEventEmitter';
import { NativeResponseType } from "./XMLHttpRequest";
import { RequestBody } from "./convertRequestBody";
declare class RCTNetworking extends NativeEventEmitter {
    constructor();
    sendRequest(method: string, trackingName: string, url: string, headers: any, data: RequestBody, responseType: NativeResponseType, incrementalUpdates: boolean, timeout: number, callback: ((requestId: number) => void), withCredentials: boolean): void;
    abortRequest(requestId: number): void;
    clearCookies(callback: ((result: boolean) => void)): void;
}
declare const _default: RCTNetworking;
export default _default;
