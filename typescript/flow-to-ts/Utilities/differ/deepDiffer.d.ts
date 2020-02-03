declare let logListeners: any;
declare type LogListeners = {
    readonly onDifferentFunctionsIgnored: (nameOne: string | null | undefined, nameTwo: string | null | undefined) => void;
};
declare type Options = {
    readonly unsafelyIgnoreFunctions?: boolean;
};
declare function unstable_setLogListeners(listeners: LogListeners | null | undefined): void;
declare const deepDiffer: (one: any, two: any, maxDepthOrOptions?: number | Options, maybeOptions?: Options) => boolean;
