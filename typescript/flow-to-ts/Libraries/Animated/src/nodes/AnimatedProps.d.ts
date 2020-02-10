import AnimatedNode from './AnimatedNode';
declare class AnimatedProps extends AnimatedNode {
    _props: any;
    _animatedView: any;
    _callback: (() => void);
    constructor(props: any, callback: (() => void));
    __getValue(): any;
    __getAnimatedValue(): any;
    __attach(): void;
    __detach(): void;
    update(): void;
    __makeNative(): void;
    setNativeView(animatedView: any): void;
    __connectAnimatedView(): void;
    __disconnectAnimatedView(): void;
    __restoreDefaultValues(): void;
    __getNativeConfig(): any;
}
export default AnimatedProps;
