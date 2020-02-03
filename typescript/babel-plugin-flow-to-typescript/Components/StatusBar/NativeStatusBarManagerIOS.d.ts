import { TurboModule } from '../../TurboModule/RCTExport';
export interface Spec extends TurboModule {
    readonly getConstants: () => {
        readonly HEIGHT: number;
        readonly DEFAULT_BACKGROUND_COLOR?: number;
    };
    readonly getHeight: (callback: (result: {
        height: number;
    }) => void) => void;
    readonly setNetworkActivityIndicatorVisible: (visible: boolean) => void;
    readonly addListener: (eventType: string) => void;
    readonly removeListeners: (count: number) => void;
    /**
     *  - statusBarStyles can be:
     *    - 'default'
     *    - 'dark-content'
     *    - 'light-content'
     */
    readonly setStyle: (statusBarStyle?: string | null, animated: boolean) => void;
    /**
     *  - withAnimation can be: 'none' | 'fade' | 'slide'
     */
    readonly setHidden: (hidden: boolean, withAnimation: string) => void;
}
declare const _default: Spec;
export default _default;
