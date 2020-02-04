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
