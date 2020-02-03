declare const keyOf: any;
declare const X_DIM: any;
declare const Y_DIM: any;
declare const Z_DIM: any;
declare const InitialOperationField: {
    transformTranslate: number[];
    transformScale: number[];
};
declare const InterpolateMatrix: {
    transformScale: (mat: any, x: any, y: any, z: any) => void;
    transformTranslate: (mat: any, x: any, y: any, z: any) => void;
};
declare const computeNextValLinear: (anim: any, from: any, to: any, value: any) => number;
declare const computeNextValLinearScalar: (anim: any, value: any) => number;
declare const setNextValAndDetectChange: (result: any, name: any, nextVal: any, didChange: any) => any;
declare const initIdentity: (mat: any) => void;
declare const computeNextMatrixOperationField: (anim: any, name: any, dim: any, index: any, value: any) => any;
declare const computeTransform: (anim: any, name: any, value: any, result: any, didChange: any, didMatrix: any) => any;
/**
 * @param {object} anims Animation configuration by style property name.
 * @return {function} Function accepting style object, that mutates that style
 * object and returns a boolean describing if any update was actually applied.
 */
declare const buildStyleInterpolator: (anims: any) => (result: any, value: any) => boolean;
