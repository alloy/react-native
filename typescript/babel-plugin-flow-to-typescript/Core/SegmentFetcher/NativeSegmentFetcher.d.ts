import { TurboModule } from '../../TurboModule/RCTExport';
export interface Spec extends TurboModule {
    readonly fetchSegment: (segmentId: number, options: object, // flowlint-line unclear-type: off
    callback: (error?: object | null) => void) => void;
    readonly getSegment?: (segmentId: number, options: object, // flowlint-line unclear-type: off
    callback: (error?: object | null, path?: string | null) => void) => void;
}
declare const _default: Spec;
export default _default;
