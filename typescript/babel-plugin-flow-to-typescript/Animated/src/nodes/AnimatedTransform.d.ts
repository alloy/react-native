declare const AnimatedNode: any;
declare const AnimatedWithChildren: any;
declare const NativeAnimatedHelper: any;
declare class AnimatedTransform extends AnimatedWithChildren {
    _transforms: ReadonlyArray<object>;
    constructor(transforms: ReadonlyArray<object>);
    __makeNative(): void;
    __getValue(): ReadonlyArray<object>;
    __getAnimatedValue(): ReadonlyArray<object>;
    __attach(): void;
    __detach(): void;
    __getNativeConfig(): any;
}
