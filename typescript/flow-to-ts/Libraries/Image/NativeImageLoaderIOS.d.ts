import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly getConstants: (() => {});
    readonly getSize: ((uri: string) => Promise<ReadonlyArray<number>>);
    readonly getSizeWithHeaders: ((uri: string, headers: any) => Promise<{
        width: number;
        height: number;
    }>);
    readonly prefetchImage: ((uri: string) => Promise<boolean>);
    readonly queryCache: ((uris: Array<string>) => Promise<any>);
}
declare const _default: Spec;
export default _default;
