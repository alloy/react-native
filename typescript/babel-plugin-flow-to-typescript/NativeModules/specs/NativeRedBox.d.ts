import { TurboModule } from '../../TurboModule/RCTExport';
export interface Spec extends TurboModule {
    readonly setExtraData: (extraData: object, forIdentifier: string) => void;
    readonly dismiss: () => void;
}
declare const _default: Spec;
export default _default;
