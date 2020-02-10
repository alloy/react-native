'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly fetchSegment: ((segmentId: number, options: any, // flowlint-line unclear-type: off
  callback: ((error: any | null | undefined) => void)) => // flowlint-line unclear-type: off
  void);
  readonly getSegment?: ((segmentId: number, options: any, // flowlint-line unclear-type: off
  callback: ((error: any | null | undefined, path: string | null | undefined) => void)) => // flowlint-line unclear-type: off
  void);
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SegmentFetcher') as Spec);
