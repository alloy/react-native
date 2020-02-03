import { TurboModule } from '../TurboModule/RCTExport';
export interface Spec extends TurboModule {
    readonly getConstants: () => {
        isTesting: boolean;
        reactNativeVersion: {
            major: number;
            minor: number;
            patch: number;
            prerelease: number | undefined | null;
        };
        Version: number;
        Release: string;
        Serial: string;
        Fingerprint: string;
        Model: string;
        ServerHost?: string;
        uiMode: string;
    };
    readonly getAndroidID: () => string;
}
declare const _default: Spec;
export default _default;
