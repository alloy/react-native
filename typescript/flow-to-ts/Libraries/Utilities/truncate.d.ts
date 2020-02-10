declare type truncateOptions = {
    breakOnWords: boolean;
    minDelta: number;
    elipsis: string;
};
declare const truncate: (str: string | null | undefined, maxChars: number, options?: truncateOptions | undefined) => string | null | undefined;
export default truncate;
