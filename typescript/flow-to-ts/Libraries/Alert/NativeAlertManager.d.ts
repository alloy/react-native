import { TurboModule } from "../TurboModule/RCTExport";
export declare type Args = {
    title?: string;
    message?: string;
    buttons?: Array<any>;
    type?: string;
    defaultValue?: string;
    cancelButtonKey?: string;
    destructiveButtonKey?: string;
    keyboardType?: string;
};
export interface Spec extends TurboModule {
    readonly alertWithArgs: ((args: Args, callback: ((id: number, value: string) => void)) => void);
}
declare const _default: Spec | null | undefined;
export default _default;
