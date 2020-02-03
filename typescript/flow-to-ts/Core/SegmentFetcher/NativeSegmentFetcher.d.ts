import { TurboModule } from "../../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly fetchSegment: (segmentId: number, options: Object, // flowlint-line unclear-type: off
    callback: (error: Object | null | undefined) => void) => void;
    readonly getSegment?: (segmentId: number, options: Object, // flowlint-line unclear-type: off
    callback: (error: Object | null | undefined, path: string | null | undefined) => void) => void;
}
declare const _default: Spec;
export default _default;
