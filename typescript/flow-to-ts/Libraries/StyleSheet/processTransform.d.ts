/**
 * Generate a transform matrix based on the provided transforms, and use that
 * within the style object instead.
 *
 * This allows us to provide an API that is similar to CSS, where transforms may
 * be applied in an arbitrary order, and yet have a universal, singular
 * interface to native code.
 */
declare function processTransform(transform: Array<any>): Array<any> | Array<number>;
export default processTransform;
