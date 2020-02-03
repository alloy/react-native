declare const PooledClass: any;
declare const twoArgumentPooler: any;
/**
 * PooledClass representing the bounding rectangle of a region.
 *
 * @param {number} width Width of bounding rectangle.
 * @param {number} height Height of bounding rectangle.
 * @constructor BoundingDimensions
 */
declare function BoundingDimensions(width: any, height: any): void;
declare namespace BoundingDimensions {
    var getPooledFromElement: (element: any) => any;
}
