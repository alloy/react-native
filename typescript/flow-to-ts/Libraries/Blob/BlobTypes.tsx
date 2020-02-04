yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Blob/BlobTypes.js
'use strict';












export opaque type BlobCollector = {};

export type BlobData = {
  blobId: string;
  offset: number;
  size: number;
  name?: string;
  type?: string;
  lastModified?: number;
  __collector?: BlobCollector | null | undefined;

};

export type BlobOptions = {
  type: string;
  lastModified: number;

};
Done in 0.47s.
