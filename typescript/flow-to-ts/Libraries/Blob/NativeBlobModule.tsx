yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Blob/NativeBlobModule.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: () => {BLOB_URI_SCHEME: string | null | undefined;BLOB_URI_HOST: string | null | undefined;};
  readonly addNetworkingHandler: () => void;
  readonly addWebSocketHandler: (id: number) => void;
  readonly removeWebSocketHandler: (id: number) => void;
  readonly sendOverSocket: (blob: Object, socketID: number) => void;
  readonly createFromParts: (parts: Array<Object>, withId: string) => void;
  readonly release: (blobId: string) => void;
}

export default (TurboModuleRegistry.get<Spec>('BlobModule') as Spec | null | undefined);
Done in 0.48s.
