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
