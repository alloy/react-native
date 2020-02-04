yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Network/RCTNetworking.ios.js
'use strict';












const NativeEventEmitter = require('../EventEmitter/NativeEventEmitter');

const convertRequestBody = require('./convertRequestBody');

import NativeNetworkingIOS from "./NativeNetworkingIOS";
import { NativeResponseType } from "./XMLHttpRequest";
import { RequestBody } from "./convertRequestBody";

class RCTNetworking extends NativeEventEmitter {

  constructor() {
    super(NativeNetworkingIOS);
  }

  sendRequest(method: string, trackingName: string, url: string, headers: Object, data: RequestBody, responseType: NativeResponseType, incrementalUpdates: boolean, timeout: number, callback: (requestId: number) => void, withCredentials: boolean) {
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

  clearCookies(callback: (result: boolean) => void) {
    NativeNetworkingIOS.clearCookies(callback);
  }
}

module.exports = (new RCTNetworking() as RCTNetworking);
Done in 0.51s.
