declare const _default: {
    Value: typeof import("./nodes/AnimatedValue").default;
    ValueXY: typeof import("./nodes/AnimatedValueXY").default;
    Interpolation: typeof import("./nodes/AnimatedInterpolation").default;
    Node: typeof import("./nodes/AnimatedNode").default;
    decay: (value: import("./nodes/AnimatedValue").default | import("./nodes/AnimatedValueXY").default, config: import("./animations/DecayAnimation").DecayAnimationConfig) => import("./AnimatedMock").CompositeAnimation;
    timing: (value: import("./nodes/AnimatedValue").default | import("./nodes/AnimatedValueXY").default, config: import("./animations/TimingAnimation").TimingAnimationConfig) => import("./AnimatedMock").CompositeAnimation;
    spring: (value: import("./nodes/AnimatedValue").default | import("./nodes/AnimatedValueXY").default, config: import("./animations/SpringAnimation").SpringAnimationConfig) => import("./AnimatedMock").CompositeAnimation;
    add: (a: number | import("./nodes/AnimatedNode").default, b: number | import("./nodes/AnimatedNode").default) => import("./nodes/AnimatedAddition").default;
    subtract: (a: number | import("./nodes/AnimatedNode").default, b: number | import("./nodes/AnimatedNode").default) => import("./nodes/AnimatedSubtraction").default;
    divide: (a: number | import("./nodes/AnimatedNode").default, b: number | import("./nodes/AnimatedNode").default) => import("./nodes/AnimatedDivision").default;
    multiply: (a: number | import("./nodes/AnimatedNode").default, b: number | import("./nodes/AnimatedNode").default) => import("./nodes/AnimatedMultiplication").default;
    modulo: (a: import("./nodes/AnimatedNode").default, modulus: number) => import("./nodes/AnimatedModulo").default;
    diffClamp: (a: import("./nodes/AnimatedNode").default, min: number, max: number) => import("./nodes/AnimatedDiffClamp").default;
    delay: (time: number) => import("./AnimatedMock").CompositeAnimation;
    sequence: (animations: import("./AnimatedMock").CompositeAnimation[]) => import("./AnimatedMock").CompositeAnimation;
    parallel: (animations: import("./AnimatedMock").CompositeAnimation[], config?: {
        stopTogether?: boolean | undefined;
    } | null | undefined) => import("./AnimatedMock").CompositeAnimation;
    stagger: (time: number, animations: import("./AnimatedMock").CompositeAnimation[]) => import("./AnimatedMock").CompositeAnimation;
    loop: (animation: import("./AnimatedMock").CompositeAnimation, { iterations }?: {
        iterations: number;
        resetBeforeIteration?: boolean | undefined;
    }) => import("./AnimatedMock").CompositeAnimation;
    event: (argMapping: ({
        [key: string]: import("./AnimatedEvent").Mapping;
    } | import("./nodes/AnimatedValue").default | null | undefined)[], config: import("./AnimatedEvent").EventConfig) => any;
    createAnimatedComponent: typeof import("./createAnimatedComponent").default;
    attachNativeEvent: any;
    forkEvent: (event: any, listener: (...args: any) => any) => any;
    unforkEvent: (event: any, listener: (...args: any) => any) => void;
    Event: any;
    __PropsOnlyForTests: typeof import("./nodes/AnimatedProps").default;
    FlatList: any;
    Image: any;
    ScrollView: any;
    SectionList: any;
    Text: any;
    View: any;
};
export default _default;
