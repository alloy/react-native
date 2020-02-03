declare const AnimatedNode: any;
declare const AnimatedWithChildren: any;
declare const NativeAnimatedHelper: any;
declare class AnimatedTransform extends AnimatedWithChildren {
    _transforms: ReadonlyArray<Object>;
    constructor(transforms: ReadonlyArray<Object>);
    __makeNative(): void;
    __getValue(): ReadonlyArray<Object>;
    __getAnimatedValue(): ReadonlyArray<Object>;
    __attach(): void;
    __detach(): void;
    __getNativeConfig(): any;
}
