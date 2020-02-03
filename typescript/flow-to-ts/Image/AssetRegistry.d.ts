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
