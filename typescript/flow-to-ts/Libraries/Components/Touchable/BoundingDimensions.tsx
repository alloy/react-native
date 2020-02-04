yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/Touchable/BoundingDimensions.js
'use strict';











const PooledClass = require('./PooledClass');

const twoArgumentPooler = PooledClass.twoArgumentPooler;

/**
 * PooledClass representing the bounding rectangle of a region.
 *
 * @param {number} width Width of bounding rectangle.
 * @param {number} height Height of bounding rectangle.
 * @constructor BoundingDimensions
 */
function BoundingDimensions(width, height) {
  this.width = width;
  this.height = height;
}

BoundingDimensions.prototype.destructor = function () {
  this.width = null;
  this.height = null;
};

/**
 * @param {HTMLElement} element Element to return `BoundingDimensions` for.
 * @return {BoundingDimensions} Bounding dimensions of `element`.
 */
BoundingDimensions.getPooledFromElement = function (element) {
  return BoundingDimensions.getPooled(element.offsetWidth, element.offsetHeight);
};

PooledClass.addPoolingTo(BoundingDimensions, twoArgumentPooler);

module.exports = BoundingDimensions;
Done in 0.47s.
