import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly getConstants: () => {};
    readonly showActionSheetWithOptions: (options: {
        readonly title?: string | null | undefined;
        readonly message?: string | null | undefined;
        readonly options: Array<string> | null | undefined;
        readonly destructiveButtonIndices?: Array<number> | null | undefined;
        readonly cancelButtonIndex?: number | null | undefined;
        readonly anchor?: number | null | undefined;
        readonly tintColor?: number | null | undefined;
    }, callback: (buttonIndex: number) => void) => void;
    readonly showShareActionSheetWithOptions: (options: {
        readonly message?: string | null | undefined;
        readonly url?: string | null | undefined;
        readonly subject?: string | null | undefined;
        readonly anchor?: number | null | undefined;
        readonly tintColor?: number | null | undefined;
        readonly excludedActivityTypes?: Array<string> | null | undefined;
    }, failureCallback: (error: {
        readonly domain: string;
        readonly code: string;
        readonly userInfo?: Object | null | undefined;
        readonly message: string;
    }) => void, successCallback: (completed: boolean, activityType: string | null | undefined) => void) => void;
}
declare const _default: Spec;
export default _default;
