declare const ReactPropTypes: any;
declare const deprecatedPropType: any;
declare const TransformMatrixPropType: (props: object, propName: string, componentName: string) => Error;
declare const DecomposedMatrixPropType: (props: object, propName: string, componentName: string) => Error;
declare const DeprecatedTransformPropTypes: {
    transform: any;
    transformMatrix: (props: object, propName: string, componentName: string) => Error;
    decomposedMatrix: (props: object, propName: string, componentName: string) => Error;
    scaleX: any;
    scaleY: any;
    rotation: any;
    translateX: any;
    translateY: any;
};
