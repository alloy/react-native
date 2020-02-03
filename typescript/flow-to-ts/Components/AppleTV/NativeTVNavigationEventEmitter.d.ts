import { TurboModule } from "../../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly addListener: (eventName: string) => void;
    readonly removeListeners: (count: number) => void;
}
declare const _default: Spec;
export default _default;
