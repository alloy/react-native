export declare type FetchSegmentFunction = typeof __fetchSegment;
export declare type GetSegmentFunction = typeof __getSegment;
/**
 * Set up SegmentFetcher.
 * You can use this module directly, or just require InitializeCore.
 */
declare function __fetchSegment(segmentId: number, options: {
    readonly otaBuildNumber: string | undefined | null;
    readonly requestedModuleName?: string | null;
}, callback: (a?: Error | null) => void): void;
declare function __getSegment(segmentId: number, options: {
    readonly otaBuildNumber: string | undefined | null;
    readonly requestedModuleName?: string | null;
}, callback: (b?: Error | null, a?: string | null) => void): void;
export {};
