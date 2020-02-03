import { TurboModule } from '../TurboModule/RCTExport';
export interface Spec extends TurboModule {
    readonly getConstants: () => {};
    readonly multiGet: (keys: Array<string>, callback: (errors?: Array<{
        message: string;
    }> | null, kvPairs?: Array<Array<string>> | null) => void) => void;
    readonly multiSet: (kvPairs: Array<Array<string>>, callback: (errors?: Array<{
        message: string;
    }> | null) => void) => void;
    readonly multiMerge: (kvPairs: Array<Array<string>>, callback: (errors?: Array<{
        message: string;
    }> | null) => void) => void;
    readonly multiRemove: (keys: Array<string>, callback: (errors?: Array<{
        message: string;
    }> | null) => void) => void;
    readonly clear: (callback: (error: {
        message: string;
    }) => void) => void;
    readonly getAllKeys: (callback: (error?: {
        message: string;
    } | null, allKeys?: Array<string> | null) => void) => void;
}
declare const _default: any;
export default _default;
