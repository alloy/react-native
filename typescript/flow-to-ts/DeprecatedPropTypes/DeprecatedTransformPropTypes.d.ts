declare const ReactPropTypes: any;
declare const deprecatedPropType: any;
declare const TransformMatrixPropType: (props: Object, propName: string, componentName: string) => Error;
declare const DecomposedMatrixPropType: (props: Object, propName: string, componentName: string) => Error;
declare const DeprecatedTransformPropTypes: {
    transform: any;
    transformMatrix: (props: Object, propName: string, componentName: string) => Error;
    decomposedMatrix: (props: Object, propName: string, componentName: string) => Error;
    scaleX: any;
    scaleY: any;
    rotation: any;
    translateX: any;
    translateY: any;
};
