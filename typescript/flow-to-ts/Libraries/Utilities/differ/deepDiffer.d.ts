declare type Options = {
    readonly unsafelyIgnoreFunctions?: boolean;
};
declare const deepDiffer: (one: any, two: any, maxDepthOrOptions?: number | Options, maybeOptions?: Options | undefined) => boolean;
export default deepDiffer;
