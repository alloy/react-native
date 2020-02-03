declare type Type = "spring" | "linear" | "easeInEaseOut" | "easeIn" | "easeOut" | "keyboard";
declare type Property = "opacity" | "scaleX" | "scaleY" | "scaleXY";
declare type AnimationConfig = Readonly<{
    duration?: number;
    delay?: number;
    springDamping?: number;
    initialVelocity?: number;
    type?: Type;
    property?: Property;
}>;
export declare type LayoutAnimationConfig = Readonly<{
    duration: number;
    create?: AnimationConfig;
    update?: AnimationConfig;
    delete?: AnimationConfig;
}>;
export {};
