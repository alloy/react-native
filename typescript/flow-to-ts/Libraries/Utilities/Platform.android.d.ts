export declare type PlatformSelectSpec<A, N, D> = {
    android?: A;
    native?: N;
    default?: D;
};
declare const Platform: {
    __constants: null;
    OS: string;
    readonly Version: number;
    readonly constants: {
        isTesting: boolean;
        reactNativeVersion: {
            major: number;
            minor: number;
            patch: number;
            prerelease: number | null | undefined;
        };
        Version: number;
        Release: string;
        Serial: string;
        Fingerprint: string;
        Model: string;
        ServerHost?: string | undefined;
        uiMode: string;
    };
    readonly isTesting: boolean;
    readonly isTV: boolean;
    select: <A, N, D>(spec: PlatformSelectSpec<A, N, D>) => A | N | D;
};
export default Platform;
