import { TurboModule } from '../TurboModule/RCTExport';
export declare type ColorSchemeName = "light" | "dark";
export declare type AppearancePreferences = {
    colorScheme?: string | null;
};
export interface Spec extends TurboModule {
    readonly getColorScheme: () => string | undefined | null;
    readonly addListener: (eventName: string) => void;
    readonly removeListeners: (count: number) => void;
}
declare const _default: Spec;
export default _default;
