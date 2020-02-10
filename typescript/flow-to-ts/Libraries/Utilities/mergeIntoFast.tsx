'use strict';












/**
 * Faster version of `mergeInto` that doesn't check its arguments and
 * also copies over prototype inherited properties.
 *
 * @param {object} one Object to assign to.
 * @param {object} two Object to assign from.
 */
const mergeIntoFast = function (one: any, two: any): void {
  for (const keyTwo in two) {
    one[keyTwo] = two[keyTwo];
  }
};

export default mergeIntoFast;;
