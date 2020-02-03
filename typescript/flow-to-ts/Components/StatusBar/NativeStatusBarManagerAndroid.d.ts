import { TurboModule } from "../../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly getConstants: () => {
        readonly HEIGHT: number;
        readonly DEFAULT_BACKGROUND_COLOR: number;
    };
    readonly setColor: (color: number, animated: boolean) => void;
    readonly setTranslucent: (translucent: boolean) => void;
    /**
     *  - statusBarStyles can be:
     *    - 'default'
     *    - 'dark-content'
     */
    readonly setStyle: (statusBarStyle?: string | null | undefined) => void;
    readonly setHidden: (hidden: boolean) => void;
}
declare const _default: Spec;
export default _default;
