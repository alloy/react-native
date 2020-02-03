import { TurboModule } from '../../TurboModule/RCTExport';
export interface Spec extends TurboModule {
    readonly show: () => void;
    readonly reload: () => void;
    readonly debugRemotely: (enableDebug: boolean) => void;
    readonly setProfilingEnabled: (enabled: boolean) => void;
    readonly setHotLoadingEnabled: (enabled: boolean) => void;
}
declare const _default: Spec;
export default _default;
