'use strict';;
import NativeModules from '../BatchedBridge/NativeModules';
import { TurboModule } from "./RCTExport";
import invariant from "invariant";

const turboModuleProxy = global.__turboModuleProxy;

export function get<T extends TurboModule>(name: string): T | null | undefined {
  return null as any;
}

export function getEnforcing<T extends TurboModule>(name: string): T {
  return null as any;
}
