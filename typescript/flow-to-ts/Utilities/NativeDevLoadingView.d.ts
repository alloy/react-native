import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly showMessage: (message: string, color: Object, backgroundColor: Object) => void;
    readonly hide: () => void;
}
declare const _default: Spec;
export default _default;
