declare const invariant: any;
/**
 * Memory conservative (mutative) matrix math utilities. Uses "command"
 * matrices, which are reusable.
 */
declare const MatrixMath: {
    createIdentityMatrix: () => number[];
    createCopy: (m: any) => any[];
    createOrthographic: (left: any, right: any, bottom: any, top: any, near: any, far: any) => number[];
    createFrustum: (left: any, right: any, bottom: any, top: any, near: any, far: any) => number[];
    /**
     * This create a perspective projection towards negative z
     * Clipping the z range of [-near, -far]
     *
     * @param fovInRadians - field of view in randians
     */
    createPerspective: (fovInRadians: any, aspect: any, near: any, far: any) => number[];
    createTranslate2d: (x: any, y: any) => any;
    reuseTranslate2dCommand: (matrixCommand: any, x: any, y: any) => void;
    reuseTranslate3dCommand: (matrixCommand: any, x: any, y: any, z: any) => void;
    createScale: (factor: any) => any;
    reuseScaleCommand: (matrixCommand: any, factor: any) => void;
    reuseScale3dCommand: (matrixCommand: any, x: any, y: any, z: any) => void;
    reusePerspectiveCommand: (matrixCommand: any, p: any) => void;
    reuseScaleXCommand(matrixCommand: any, factor: any): void;
    reuseScaleYCommand(matrixCommand: any, factor: any): void;
    reuseScaleZCommand(matrixCommand: any, factor: any): void;
    reuseRotateXCommand: (matrixCommand: any, radians: any) => void;
    reuseRotateYCommand: (matrixCommand: any, amount: any) => void;
    reuseRotateZCommand: (matrixCommand: any, radians: any) => void;
    createRotateZ: (radians: any) => any;
    reuseSkewXCommand: (matrixCommand: any, radians: any) => void;
    reuseSkewYCommand: (matrixCommand: any, radians: any) => void;
    multiplyInto: (out: any, a: any, b: any) => void;
    determinant(matrix: number[]): number;
    /**
     * Inverse of a matrix. Multiplying by the inverse is used in matrix math
     * instead of division.
     *
     * Formula from:
     * http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
     */
    inverse(matrix: number[]): number[];
    /**
     * Turns columns into rows and rows into columns.
     */
    transpose(m: number[]): number[];
    /**
     * Based on: http://tog.acm.org/resources/GraphicsGems/gemsii/unmatrix.c
     */
    multiplyVectorByMatrix(v: number[], m: number[]): number[];
    /**
     * From: https://code.google.com/p/webgl-mjs/source/browse/mjs.js
     */
    v3Length(a: number[]): number;
    /**
     * Based on: https://code.google.com/p/webgl-mjs/source/browse/mjs.js
     */
    v3Normalize(vector: number[], v3Length: number): number[];
    /**
     * The dot product of a and b, two 3-element vectors.
     * From: https://code.google.com/p/webgl-mjs/source/browse/mjs.js
     */
    v3Dot(a: any, b: any): number;
    /**
     * From:
     * http://www.opensource.apple.com/source/WebCore/WebCore-514/platform/graphics/transforms/TransformationMatrix.cpp
     */
    v3Combine(a: number[], b: number[], aScale: number, bScale: number): number[];
    /**
     * From:
     * http://www.opensource.apple.com/source/WebCore/WebCore-514/platform/graphics/transforms/TransformationMatrix.cpp
     */
    v3Cross(a: number[], b: number[]): number[];
    /**
     * Based on:
     * http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToEuler/
     * and:
     * http://quat.zachbennett.com/
     *
     * Note that this rounds degrees to the thousandth of a degree, due to
     * floating point errors in the creation of the quaternion.
     *
     * Also note that this expects the qw value to be last, not first.
     *
     * Also, when researching this, remember that:
     * yaw   === heading            === z-axis
     * pitch === elevation/attitude === y-axis
     * roll  === bank               === x-axis
     */
    quaternionToDegreesXYZ(q: number[], matrix: any, row: any): number[];
    /**
     * Based on:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
     */
    roundTo3Places(n: number): number;
    /**
     * Decompose a matrix into separate transform values, for use on platforms
     * where applying a precomposed matrix is not possible, and transforms are
     * applied in an inflexible ordering (e.g. Android).
     *
     * Implementation based on
     * http://www.w3.org/TR/css3-transforms/#decomposing-a-2d-matrix
     * http://www.w3.org/TR/css3-transforms/#decomposing-a-3d-matrix
     * which was based on
     * http://tog.acm.org/resources/GraphicsGems/gemsii/unmatrix.c
     */
    decomposeMatrix(transformMatrix: number[]): Object;
};
