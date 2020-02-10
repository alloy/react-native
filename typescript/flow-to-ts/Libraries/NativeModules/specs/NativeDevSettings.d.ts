import { TurboModule } from "../../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly reload: (() => void);
    readonly reloadWithReason?: ((reason: string) => void);
    readonly onFastRefresh?: (() => void);
    readonly setHotLoadingEnabled: ((isHotLoadingEnabled: boolean) => void);
    readonly setIsDebuggingRemotely: ((isDebuggingRemotelyEnabled: boolean) => void);
    readonly setProfilingEnabled: ((isProfilingEnabled: boolean) => void);
    readonly toggleElementInspector: (() => void);
    readonly addMenuItem: ((title: string) => void);
    readonly addListener: ((eventName: string) => void);
    readonly removeListeners: ((count: number) => void);
    readonly setIsShakeToShowDevMenuEnabled: ((enabled: boolean) => void);
}
declare const _default: Spec;
export default _default;
