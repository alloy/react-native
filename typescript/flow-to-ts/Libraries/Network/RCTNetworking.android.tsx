'use strict';;
import NativeEventEmitter from '../EventEmitter/NativeEventEmitter';
import convertRequestBody from './convertRequestBody';

import NativeNetworkingAndroid from "./NativeNetworkingAndroid";
import { RequestBody } from "./convertRequestBody";

type Header = [string, string];

// Convert FormData headers to arrays, which are easier to consume in
// native on Android.
function convertHeadersMapToArray(headers: any): Array<Header> {
  return null as any;
}

let _requestId = 1;
function generateRequestId(): number {
  return null as any;
}

/**
 * This class is a wrapper around the native RCTNetworking module. It adds a necessary unique
 * requestId to each network request that can be used to abort that request later on.
 */
class RCTNetworking extends NativeEventEmitter {

  constructor() {
    super(NativeNetworkingAndroid);
  }

  sendRequest(method: string, trackingName: string, url: string, headers: any, data: RequestBody, responseType: "text" | "base64", incrementalUpdates: boolean, timeout: number, callback: ((requestId: number) => unknown), withCredentials: boolean) {
    const body = convertRequestBody(data);
    if (body && body.formData) {
      body.formData = body.formData.map(part => ({
        ...part,
        headers: convertHeadersMapToArray(part.headers)
      }));
    }
    const requestId = generateRequestId();
    NativeNetworkingAndroid.sendRequest(method, url, requestId, convertHeadersMapToArray(headers), { ...body, trackingName }, responseType, incrementalUpdates, timeout, withCredentials);
    callback(requestId);
  }

  abortRequest(requestId: number) {
    NativeNetworkingAndroid.abortRequest(requestId);
  }

  clearCookies(callback: ((result: boolean) => any)) {
    NativeNetworkingAndroid.clearCookies(callback);
  }
}

export default new RCTNetworking() as RCTNetworking;;
