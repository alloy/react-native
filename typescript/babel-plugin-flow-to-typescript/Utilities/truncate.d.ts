declare type truncateOptions = {
    breakOnWords: boolean;
    minDelta: number;
    elipsis: string;
};
declare const defaultOptions: {
    breakOnWords: boolean;
    minDelta: number;
    elipsis: string;
};
declare const truncate: (str: string, maxChars: number, options?: truncateOptions) => string;
