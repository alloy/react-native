/**
 * Faster version of `mergeInto` that doesn't check its arguments and
 * also copies over prototype inherited properties.
 *
 * @param {object} one Object to assign to.
 * @param {object} two Object to assign from.
 */
declare const mergeIntoFast: (one: any, two: any) => void;
export default mergeIntoFast;
