import { TurboModule } from "../../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly getConstants: () => {};
    readonly getString: () => Promise<string>;
    readonly setString: (content: string) => void;
}
declare const _default: Spec;
export default _default;
