yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Core/setUpSegmentFetcher.js
'use strict';












export type FetchSegmentFunction = typeof __fetchSegment;
export type GetSegmentFunction = typeof __getSegment;

/**
 * Set up SegmentFetcher.
 * You can use this module directly, or just require InitializeCore.
 */
function __fetchSegment(segmentId: number, options: {
  readonly otaBuildNumber: string | null | undefined;
  readonly requestedModuleName?: string | null | undefined;
}, callback: (arg0: Error | null | undefined) => void) {
  const SegmentFetcher = require('./SegmentFetcher/NativeSegmentFetcher').default;
  SegmentFetcher.fetchSegment(segmentId, options, (errorObject: {
    message: string;
    code: string;

  } | null | undefined) => {
    if (errorObject) {
      const error = new Error(errorObject.message);
      (error as any).code = errorObject.code; // flowlint-line unclear-type: off
      callback(error);
    }

    callback(null);
  });
}

global.__fetchSegment = __fetchSegment;

function __getSegment(segmentId: number, options: {
  readonly otaBuildNumber: string | null | undefined;
  readonly requestedModuleName?: string | null | undefined;
}, callback: (arg0: Error | null | undefined, arg1: string | null | undefined) => void) {
  const SegmentFetcher = require('./SegmentFetcher/NativeSegmentFetcher').default;

  if (!SegmentFetcher.getSegment) {
    throw new Error('SegmentFetcher.getSegment must be defined');
  }

  SegmentFetcher.getSegment(segmentId, options, (errorObject: {
    message: string;
    code: string;

  } | null | undefined, path: string | null | undefined) => {
    if (errorObject) {
      const error = new Error(errorObject.message);
      (error as any).code = errorObject.code; // flowlint-line unclear-type: off
      callback(error);
    }

    callback(null, path);
  });
}

global.__getSegment = __getSegment;
Done in 0.47s.
