yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Network/NativeNetworkingAndroid.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

type Header = [string, string];

export interface Spec extends TurboModule {
  readonly sendRequest: (method: string, url: string, requestId: number, headers: Array<Header>, data: Object, responseType: string, useIncrementalUpdates: boolean, timeout: number, withCredentials: boolean) => void;
  readonly abortRequest: (requestId: number) => void;
  readonly clearCookies: (callback: (result: boolean) => void) => void;
  // RCTEventEmitter
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('Networking') as Spec);
Done in 0.46s.
