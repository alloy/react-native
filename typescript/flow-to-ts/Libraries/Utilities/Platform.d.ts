export declare type PlatformSelectSpec<D, N, I> = {
    default?: D;
    native?: N;
    ios?: I;
};
declare const Platform: {
    __constants: null;
    OS: string;
    readonly Version: string;
    readonly constants: {
        forceTouchAvailable: boolean;
        interfaceIdiom: string;
        isTesting: boolean;
        osVersion: string;
        reactNativeVersion: {
            major: number;
            minor: number;
            patch: number;
            prerelease: number | null | undefined;
        };
        systemName: string;
    };
    readonly isPad: boolean;
    /**
     * Deprecated, use `isTV` instead.
     */
    readonly isTVOS: boolean;
    readonly isTV: boolean;
    readonly isTesting: boolean;
    select: <D, N, I>(spec: PlatformSelectSpec<D, N, I>) => D | N | I;
};
export default Platform;
