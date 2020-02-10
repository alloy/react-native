import { TurboModule } from "../TurboModule/RCTExport";
export interface Spec extends TurboModule {
    readonly getConstants: (() => {});
    readonly multiGet: ((keys: Array<string>, callback: ((errors: Array<{
        message: string;
    }> | null | undefined, kvPairs: Array<Array<string>> | null | undefined) => void)) => void);
    readonly multiSet: ((kvPairs: Array<Array<string>>, callback: ((errors: Array<{
        message: string;
    }> | null | undefined) => void)) => void);
    readonly multiMerge: ((kvPairs: Array<Array<string>>, callback: ((errors: Array<{
        message: string;
    }> | null | undefined) => void)) => void);
    readonly multiRemove: ((keys: Array<string>, callback: ((errors: Array<{
        message: string;
    }> | null | undefined) => void)) => void);
    readonly clear: ((callback: ((error: {
        message: string;
    }) => void)) => void);
    readonly getAllKeys: ((callback: ((error: {
        message: string;
    } | null | undefined, allKeys: Array<string> | null | undefined) => void)) => void);
}
declare const _default: Spec | null | undefined;
export default _default;
