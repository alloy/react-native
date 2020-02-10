import { TurboModule } from "../../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly fetchSegment: ((segmentId: number, options: any, // flowlint-line unclear-type: off
    callback: ((error: any | null | undefined) => void)) => void);
    readonly getSegment?: ((segmentId: number, options: any, // flowlint-line unclear-type: off
    callback: ((error: any | null | undefined, path: string | null | undefined) => void)) => void);
}
declare const _default: Spec;
export default _default;
