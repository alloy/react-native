import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly getConstants: () => {};
    readonly getSize: (uri: string) => Promise<ReadonlyArray<number>>;
    readonly getSizeWithHeaders: (uri: string, headers: Object) => Promise<{
        width: number;
        height: number;
    }>;
    readonly prefetchImage: (uri: string) => Promise<boolean>;
    readonly queryCache: (uris: Array<string>) => Promise<Object>;
}
declare const _default: Spec;
export default _default;
