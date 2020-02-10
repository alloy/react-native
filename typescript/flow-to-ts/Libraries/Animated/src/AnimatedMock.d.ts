import AnimatedInterpolation from './nodes/AnimatedInterpolation';
import AnimatedNode from './nodes/AnimatedNode';
import AnimatedProps from './nodes/AnimatedProps';
import AnimatedValue from './nodes/AnimatedValue';
import AnimatedValueXY from './nodes/AnimatedValueXY';
import createAnimatedComponent from './createAnimatedComponent';
import { EndCallback } from "./animations/Animation";
import { TimingAnimationConfig } from "./animations/TimingAnimation";
import { DecayAnimationConfig } from "./animations/DecayAnimation";
import { SpringAnimationConfig } from "./animations/SpringAnimation";
import { Mapping, EventConfig } from "./AnimatedEvent";
/**
 * Animations are a source of flakiness in snapshot testing. This mock replaces
 * animation functions from AnimatedImplementation with empty animations for
 * predictability in tests.
 */
export declare type CompositeAnimation = {
    start: ((callback?: EndCallback | null | undefined) => void);
    stop: (() => void);
    reset: (() => void);
    _startNativeLoop: ((iterations?: number) => void);
    _isUsingNativeDriver: (() => boolean);
};
declare type ParallelConfig = {
    stopTogether?: boolean;
};
declare type LoopAnimationConfig = {
    iterations: number;
    resetBeforeIteration?: boolean;
};
declare const _default: {
    Value: typeof AnimatedValue;
    ValueXY: typeof AnimatedValueXY;
    Interpolation: typeof AnimatedInterpolation;
    Node: typeof AnimatedNode;
    decay: (value: AnimatedValue | AnimatedValueXY, config: DecayAnimationConfig) => CompositeAnimation;
    timing: (value: AnimatedValue | AnimatedValueXY, config: TimingAnimationConfig) => CompositeAnimation;
    spring: (value: AnimatedValue | AnimatedValueXY, config: SpringAnimationConfig) => CompositeAnimation;
    add: (a: number | AnimatedNode, b: number | AnimatedNode) => import("./nodes/AnimatedAddition").default;
    subtract: (a: number | AnimatedNode, b: number | AnimatedNode) => import("./nodes/AnimatedSubtraction").default;
    divide: (a: number | AnimatedNode, b: number | AnimatedNode) => import("./nodes/AnimatedDivision").default;
    multiply: (a: number | AnimatedNode, b: number | AnimatedNode) => import("./nodes/AnimatedMultiplication").default;
    modulo: (a: AnimatedNode, modulus: number) => import("./nodes/AnimatedModulo").default;
    diffClamp: (a: AnimatedNode, min: number, max: number) => import("./nodes/AnimatedDiffClamp").default;
    delay: (time: number) => CompositeAnimation;
    sequence: (animations: CompositeAnimation[]) => CompositeAnimation;
    parallel: (animations: CompositeAnimation[], config?: ParallelConfig | null | undefined) => CompositeAnimation;
    stagger: (time: number, animations: CompositeAnimation[]) => CompositeAnimation;
    loop: (animation: CompositeAnimation, { iterations }?: LoopAnimationConfig) => CompositeAnimation;
    event: (argMapping: ({
        [key: string]: Mapping;
    } | AnimatedValue | null | undefined)[], config: EventConfig) => any;
    createAnimatedComponent: typeof createAnimatedComponent;
    attachNativeEvent: any;
    forkEvent: (event: any, listener: (...args: any) => any) => any;
    unforkEvent: (event: any, listener: (...args: any) => any) => void;
    Event: any;
    __PropsOnlyForTests: typeof AnimatedProps;
};
export default _default;
