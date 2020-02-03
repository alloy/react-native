import { TurboModule } from '../../TurboModule/RCTExport';
/**
 * Native Module used for playing sounds in native platform.
 */
export interface Spec extends TurboModule {
    readonly playTouchSound: () => void;
}
declare const _default: Spec;
export default _default;
