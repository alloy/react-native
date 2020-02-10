import AnimatedWithChildren from './AnimatedWithChildren';
declare class AnimatedTransform extends AnimatedWithChildren {
    _transforms: ReadonlyArray<any>;
    constructor(transforms: ReadonlyArray<any>);
    __makeNative(): void;
    __getValue(): ReadonlyArray<any>;
    __getAnimatedValue(): ReadonlyArray<any>;
    __attach(): void;
    __detach(): void;
    __getNativeConfig(): any;
}
export default AnimatedTransform;
