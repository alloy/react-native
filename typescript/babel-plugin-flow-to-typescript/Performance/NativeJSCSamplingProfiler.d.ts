import { TurboModule } from '../TurboModule/RCTExport';
export interface Spec extends TurboModule {
    readonly operationComplete: (token: number, result?: string | null, error?: string | null) => void;
}
declare const _default: Spec;
export default _default;
