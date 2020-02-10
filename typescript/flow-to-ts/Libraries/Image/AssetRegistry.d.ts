export declare type PackagerAsset = {
    readonly __packager_asset: boolean;
    readonly fileSystemLocation: string;
    readonly httpServerLocation: string;
    readonly width: number | null | undefined;
    readonly height: number | null | undefined;
    readonly scales: Array<number>;
    readonly hash: string;
    readonly name: string;
    readonly type: string;
};
declare function registerAsset(asset: PackagerAsset): number;
declare function getAssetByID(assetId: number): PackagerAsset;
declare const _default: {
    registerAsset: typeof registerAsset;
    getAssetByID: typeof getAssetByID;
};
export default _default;
