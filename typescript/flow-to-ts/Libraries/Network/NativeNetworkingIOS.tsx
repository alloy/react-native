yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Network/NativeNetworkingIOS.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

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
  // RCTEventEmitter
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('Networking') as Spec);
Done in 0.49s.
