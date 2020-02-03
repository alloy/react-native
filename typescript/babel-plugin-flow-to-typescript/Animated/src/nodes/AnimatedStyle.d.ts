declare const AnimatedNode: any;
declare const AnimatedTransform: any;
declare const AnimatedWithChildren: any;
declare const NativeAnimatedHelper: any;
declare const flattenStyle: any;
declare class AnimatedStyle extends AnimatedWithChildren {
    _style: object;
    constructor(style: any);
    _walkStyleAndGetValues(style: any): {};
    __getValue(): object;
    _walkStyleAndGetAnimatedValues(style: any): {};
    __getAnimatedValue(): object;
    __attach(): void;
    __detach(): void;
    __makeNative(): void;
    __getNativeConfig(): object;
}
