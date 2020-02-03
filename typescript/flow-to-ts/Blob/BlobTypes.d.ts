declare type BlobCollector = {};
export declare type BlobData = {
    blobId: string;
    offset: number;
    size: number;
    name?: string;
    type?: string;
    lastModified?: number;
    __collector?: BlobCollector | null | undefined;
};
export declare type BlobOptions = {
    type: string;
    lastModified: number;
};
export {};
