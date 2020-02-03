declare const AnimatedNode: any;
declare const AnimatedTransform: any;
declare const AnimatedWithChildren: any;
declare const NativeAnimatedHelper: any;
declare const flattenStyle: any;
declare class AnimatedStyle extends AnimatedWithChildren {
    _style: Object;
    constructor(style: any);
    _walkStyleAndGetValues(style: any): {};
    __getValue(): Object;
    _walkStyleAndGetAnimatedValues(style: any): {};
    __getAnimatedValue(): Object;
    __attach(): void;
    __detach(): void;
    __makeNative(): void;
    __getNativeConfig(): Object;
}
