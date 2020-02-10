import AnimatedWithChildren from './AnimatedWithChildren';
declare class AnimatedStyle extends AnimatedWithChildren {
    _style: any;
    constructor(style: any);
    _walkStyleAndGetValues(style: any): {};
    __getValue(): any;
    _walkStyleAndGetAnimatedValues(style: any): {};
    __getAnimatedValue(): any;
    __attach(): void;
    __detach(): void;
    __makeNative(): void;
    __getNativeConfig(): any;
}
export default AnimatedStyle;
