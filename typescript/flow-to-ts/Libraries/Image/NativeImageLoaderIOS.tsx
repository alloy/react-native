yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Image/NativeImageLoaderIOS.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: () => {};
  // Return [width, height] of image uri
  readonly getSize: (uri: string) => Promise<ReadonlyArray<number>>;
  readonly getSizeWithHeaders: (uri: string, headers: Object) => Promise<{
    width: number;
    height: number;

  }>;
  readonly prefetchImage: (uri: string) => Promise<boolean>;
  readonly queryCache: (uris: Array<string>) => Promise<Object>;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('ImageLoader') as Spec);
Done in 0.46s.
