'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: (() => {});
  // Return [width, height] of image uri
  readonly getSize: ((uri: string) => Promise<ReadonlyArray<number>>);
  readonly getSizeWithHeaders: ((uri: string, headers: any) => Promise<{
    width: number;
    height: number;

  }>);
  readonly prefetchImage: ((uri: string) => Promise<boolean>);
  readonly queryCache: ((uris: Array<string>) => Promise<any>);
}

export default (TurboModuleRegistry.getEnforcing<Spec>('ImageLoader') as Spec);
