yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/WebSocket/NativeWebSocketModule.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly connect: (url: string, protocols: Array<string> | null | undefined, options: {headers?: Object;}, socketID: number) => void;
  readonly send: (message: string, forSocketID: number) => void;
  readonly sendBinary: (base64String: string, forSocketID: number) => void;
  readonly ping: (socketID: number) => void;
  readonly close: (code: number, reason: string, socketID: number) => void;
  // RCTEventEmitter
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('WebSocketModule') as Spec);
Done in 0.48s.
