import Blob from './Blob';
declare type ReadyState = 0 | 1 | 2;
declare type ReaderResult = string | ArrayBuffer;
declare const FileReader_base: any;
declare class FileReader extends FileReader_base {
    static EMPTY: number;
    static LOADING: number;
    static DONE: number;
    EMPTY: number;
    LOADING: number;
    DONE: number;
    _readyState: ReadyState;
    _error: Error | null | undefined;
    _result: ReaderResult | null | undefined;
    _aborted: boolean;
    _subscriptions: Array<any>;
    constructor();
    _reset(): void;
    _clearSubscriptions(): void;
    _setReadyState(newState: ReadyState): void;
    readAsArrayBuffer(): void;
    readAsDataURL(blob: Blob | null | undefined): void;
    readAsText(blob: Blob | null | undefined, encoding?: string): void;
    abort(): void;
    get readyState(): ReadyState;
    get error(): Error | null | undefined;
    get result(): ReaderResult | null | undefined;
}
export default FileReader;
