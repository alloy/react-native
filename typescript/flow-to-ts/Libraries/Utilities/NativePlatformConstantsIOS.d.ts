import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly getConstants: (() => {
        isTesting: boolean;
        reactNativeVersion: {
            major: number;
            minor: number;
            patch: number;
            prerelease: number | null | undefined;
        };
        forceTouchAvailable: boolean;
        osVersion: string;
        systemName: string;
        interfaceIdiom: string;
    });
}
declare const _default: Spec;
export default _default;
