import { TurboModule } from '../../TurboModule/RCTExport';
declare type DialogAction = string;
declare type DialogButtonKey = number;
export declare type DialogOptions = {
    title?: string;
    message?: string;
    buttonPositive?: string;
    buttonNegative?: string;
    buttonNeutral?: string;
    items?: Array<string>;
    cancelable?: boolean;
};
export interface Spec extends TurboModule {
    readonly getConstants: () => {
        readonly buttonClicked: DialogAction;
        readonly dismissed: DialogAction;
        readonly buttonPositive: DialogButtonKey;
        readonly buttonNegative: DialogButtonKey;
        readonly buttonNeutral: DialogButtonKey;
    };
    readonly showAlert: (config: DialogOptions, onError: (error: string) => void, onAction: (action: DialogAction, buttonKey?: DialogButtonKey) => void) => void;
}
declare const _default: Spec;
export default _default;
