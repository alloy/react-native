import { TurboModule } from "../TurboModule/RCTExport";
export declare type ColorSchemeName = "light" | "dark";
export declare type AppearancePreferences = {
    colorScheme?: string | null | undefined;
};
export interface Spec extends TurboModule {
    readonly getColorScheme: () => string | null | undefined;
    readonly addListener: (eventName: string) => void;
    readonly removeListeners: (count: number) => void;
}
declare const _default: Spec;
export default _default;
