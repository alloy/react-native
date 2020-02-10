import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly getConstants: (() => {
        initialAppState: string;
    });
    readonly getCurrentAppState: ((success: ((appState: {
        app_state: string;
    }) => void), error: ((error: any) => void)) => void);
    readonly addListener: ((eventName: string) => void);
    readonly removeListeners: ((count: number) => void);
}
declare const _default: Spec;
export default _default;
