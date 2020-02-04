'use strict';
import { $ReadOnly } from "utility-types";












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly abortRequest: (requestId: number) => void;
  readonly getConstants: () => {};
  readonly getSize: (uri: string) => Promise<$ReadOnly<{
    width: number;
    height: number;

  }>>;
  readonly getSizeWithHeaders: (uri: string, headers: Object) => Promise<{
    width: number;
    height: number;

  }>;
  readonly prefetchImage: (uri: string, requestId: number) => Promise<boolean>;
  readonly queryCache: (uris: Array<string>) => Promise<Object>;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('ImageLoader') as Spec);
