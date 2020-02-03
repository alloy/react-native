declare type $ObjMap<T extends {}, F extends (v: any) => any> = {
    [K in keyof T]: F extends (v: T[K]) => infer R ? R : never;
};
declare type $ObjMapi<T extends {}, F extends (k: any, v: any) => any> = {
    [K in keyof T]: F extends (k: K, v: T[K]) => infer R ? R : never;
};
declare const DeprecatedImageStylePropTypes: any;
declare const DeprecatedTextStylePropTypes: any;
declare const DeprecatedViewStylePropTypes: any;
declare const processColor: any;
declare const processTransform: any;
declare const sizesDiffer: any;
declare type ReturnBoolType = <V>(a: V) => true;
declare type BoolifiedDeprecatedViewStylePropTypes = $ObjMap<typeof DeprecatedViewStylePropTypes, ReturnBoolType>;
declare type BoolifiedDeprecatedTextStylePropTypes = $ObjMapi<typeof DeprecatedTextStylePropTypes, ReturnBoolType>;
declare type BoolifiedDeprecatedImageStylePropTypes = $ObjMapi<typeof DeprecatedImageStylePropTypes, ReturnBoolType>;
declare type StyleAttributesType = {
    transform: Readonly<{
        process: typeof processTransform;
    }> | true;
    shadowOffset: Readonly<{
        diff: typeof sizesDiffer;
    }> | true;
    backgroundColor: typeof colorAttributes | true;
    borderBottomColor: typeof colorAttributes | true;
    borderColor: typeof colorAttributes | true;
    borderLeftColor: typeof colorAttributes | true;
    borderRightColor: typeof colorAttributes | true;
    borderTopColor: typeof colorAttributes | true;
    borderStartColor: typeof colorAttributes | true;
    borderEndColor: typeof colorAttributes | true;
    color: typeof colorAttributes | true;
    shadowColor: typeof colorAttributes | true;
    textDecorationColor: typeof colorAttributes | true;
    tintColor: typeof colorAttributes | true;
    textShadowColor: typeof colorAttributes | true;
    overlayColor: typeof colorAttributes | true;
} & BoolifiedDeprecatedViewStylePropTypes & BoolifiedDeprecatedTextStylePropTypes & BoolifiedDeprecatedImageStylePropTypes;
declare const ReactNativeStyleAttributes: StyleAttributesType;
declare const colorAttributes: {
    process: any;
};
