/**
 * Unrolls an array comparison specially for matrices. Prioritizes
 * checking of indices that are most likely to change so that the comparison
 * bails as early as possible.
 *
 * @param {MatrixMath.Matrix} one First matrix.
 * @param {MatrixMath.Matrix} two Second matrix.
 * @return {boolean} Whether or not the two matrices differ.
 */
declare const matricesDiffer: (one: any, two: any) => boolean;
export default matricesDiffer;
