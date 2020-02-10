declare const _default: {
    div: any;
    span: any;
    img: any;
    Value: typeof import("./nodes/AnimatedValue").default;
    ValueXY: typeof import("./nodes/AnimatedValueXY").default;
    Interpolation: typeof import("./nodes/AnimatedInterpolation").default;
    Node: typeof import("./nodes/AnimatedNode").default;
    decay: (value: import("./nodes/AnimatedValue").default | import("./nodes/AnimatedValueXY").default, config: import("./animations/DecayAnimation").DecayAnimationConfig) => import("./AnimatedImplementation").CompositeAnimation;
    timing: (value: import("./nodes/AnimatedValue").default | import("./nodes/AnimatedValueXY").default, config: import("./animations/TimingAnimation").TimingAnimationConfig) => import("./AnimatedImplementation").CompositeAnimation;
    spring: (value: import("./nodes/AnimatedValue").default | import("./nodes/AnimatedValueXY").default, config: import("./animations/SpringAnimation").SpringAnimationConfig) => import("./AnimatedImplementation").CompositeAnimation;
    add: (a: number | import("./nodes/AnimatedNode").default, b: number | import("./nodes/AnimatedNode").default) => import("./nodes/AnimatedAddition").default;
    subtract: (a: number | import("./nodes/AnimatedNode").default, b: number | import("./nodes/AnimatedNode").default) => import("./nodes/AnimatedSubtraction").default;
    divide: (a: number | import("./nodes/AnimatedNode").default, b: number | import("./nodes/AnimatedNode").default) => import("./nodes/AnimatedDivision").default;
    multiply: (a: number | import("./nodes/AnimatedNode").default, b: number | import("./nodes/AnimatedNode").default) => import("./nodes/AnimatedMultiplication").default;
    modulo: (a: import("./nodes/AnimatedNode").default, modulus: number) => import("./nodes/AnimatedModulo").default;
    diffClamp: (a: import("./nodes/AnimatedNode").default, min: number, max: number) => import("./nodes/AnimatedDiffClamp").default;
    delay: (time: number) => import("./AnimatedImplementation").CompositeAnimation;
    sequence: (animations: import("./AnimatedImplementation").CompositeAnimation[]) => import("./AnimatedImplementation").CompositeAnimation;
    parallel: (animations: import("./AnimatedImplementation").CompositeAnimation[], config?: {
        stopTogether?: boolean | undefined;
    } | null | undefined) => import("./AnimatedImplementation").CompositeAnimation;
    stagger: (time: number, animations: import("./AnimatedImplementation").CompositeAnimation[]) => import("./AnimatedImplementation").CompositeAnimation;
    loop: (animation: import("./AnimatedImplementation").CompositeAnimation, { iterations, resetBeforeIteration }?: {
        iterations: number;
        resetBeforeIteration?: boolean | undefined;
    }) => import("./AnimatedImplementation").CompositeAnimation;
    event: (argMapping: readonly ({
        [key: string]: import("./AnimatedEvent").Mapping;
    } | import("./nodes/AnimatedValue").default | null | undefined)[], config: import("./AnimatedEvent").EventConfig) => any;
    createAnimatedComponent: typeof import("./createAnimatedComponent").default;
    attachNativeEvent: any;
    forkEvent: (event: any, listener: (...args: any) => any) => any;
    unforkEvent: (event: any, listener: (...args: any) => any) => void;
    Event: any;
    __PropsOnlyForTests: typeof import("./nodes/AnimatedProps").default;
};
export default _default;
