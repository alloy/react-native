declare const MatrixMath: any;
declare const Platform: any;
declare const invariant: any;
declare const stringifySafe: any;
/**
 * Generate a transform matrix based on the provided transforms, and use that
 * within the style object instead.
 *
 * This allows us to provide an API that is similar to CSS, where transforms may
 * be applied in an arbitrary order, and yet have a universal, singular
 * interface to native code.
 */
declare function processTransform(transform: Array<Object>): Array<Object> | Array<number>;
/**
 * Performs a destructive operation on a transform matrix.
 */
declare function _multiplyTransform(result: Array<number>, matrixMathFunction: Function, args: Array<number>): void;
/**
 * Parses a string like '0.5rad' or '60deg' into radians expressed in a float.
 * Note that validation on the string is done in `_validateTransform()`.
 */
declare function _convertToRadians(value: string): number;
declare function _validateTransforms(transform: Array<Object>): void;
declare function _validateTransform(key: any, value: any, transformation: any): void;
