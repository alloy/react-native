import { TurboModule } from '../TurboModule/RCTExport';
export interface Spec extends TurboModule {
    readonly captureComplete: (path: string, error?: string | null) => void;
}
declare const _default: Spec;
export default _default;
