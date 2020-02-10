'use strict';;
import NativeEventEmitter from '../EventEmitter/NativeEventEmitter';
import convertRequestBody from './convertRequestBody';

import NativeNetworkingIOS from "./NativeNetworkingIOS";
import { NativeResponseType } from "./XMLHttpRequest";
import { RequestBody } from "./convertRequestBody";

class RCTNetworking extends NativeEventEmitter {

  constructor() {
    super(NativeNetworkingIOS);
  }

  sendRequest(method: string, trackingName: string, url: string, headers: any, data: RequestBody, responseType: NativeResponseType, incrementalUpdates: boolean, timeout: number, callback: ((requestId: number) => void), withCredentials: boolean) {
    const body = convertRequestBody(data);
    NativeNetworkingIOS.sendRequest({
      method,
      url,
      data: { ...body, trackingName },
      headers,
      responseType,
      incrementalUpdates,
      timeout,
      withCredentials
    }, callback);
  }

  abortRequest(requestId: number) {
    NativeNetworkingIOS.abortRequest(requestId);
  }

  clearCookies(callback: ((result: boolean) => void)) {
    NativeNetworkingIOS.clearCookies(callback);
  }
}

export default new RCTNetworking() as RCTNetworking;;
