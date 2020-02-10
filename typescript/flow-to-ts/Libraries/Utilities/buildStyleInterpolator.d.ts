/**
 * @param {object} anims Animation configuration by style property name.
 * @return {function} Function accepting style object, that mutates that style
 * object and returns a boolean describing if any update was actually applied.
 */
declare const buildStyleInterpolator: (anims: any) => (result: any, value: any) => boolean;
export default buildStyleInterpolator;
