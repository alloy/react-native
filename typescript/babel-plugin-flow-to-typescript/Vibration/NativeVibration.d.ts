import { TurboModule } from '../TurboModule/RCTExport';
export interface Spec extends TurboModule {
    readonly getConstants: () => {};
    readonly vibrate: (pattern?: number | null) => void;
    readonly vibrateByPattern: (pattern: Array<number>, repeat: number) => void;
    readonly cancel: () => void;
}
declare const _default: Spec;
export default _default;
