declare const AnimatedEvent: any;
declare const AnimatedNode: any;
declare const AnimatedStyle: any;
declare const NativeAnimatedHelper: any;
declare const ReactNative: any;
declare const invariant: any;
declare class AnimatedProps extends AnimatedNode {
    _props: Object;
    _animatedView: any;
    _callback: () => void;
    constructor(props: Object, callback: () => void);
    __getValue(): Object;
    __getAnimatedValue(): Object;
    __attach(): void;
    __detach(): void;
    update(): void;
    __makeNative(): void;
    setNativeView(animatedView: any): void;
    __connectAnimatedView(): void;
    __disconnectAnimatedView(): void;
    __restoreDefaultValues(): void;
    __getNativeConfig(): Object;
}
