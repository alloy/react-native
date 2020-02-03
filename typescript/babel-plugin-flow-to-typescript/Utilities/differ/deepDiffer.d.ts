declare let logListeners: any;
declare type LogListeners = {
    readonly onDifferentFunctionsIgnored: (nameOne?: string | null, nameTwo?: string | null) => void;
};
declare type Options = {
    readonly unsafelyIgnoreFunctions?: boolean;
};
declare function unstable_setLogListeners(listeners?: LogListeners | null): void;
declare const deepDiffer: (one: any, two: any, maxDepthOrOptions?: number | Options, maybeOptions?: Options) => boolean;
