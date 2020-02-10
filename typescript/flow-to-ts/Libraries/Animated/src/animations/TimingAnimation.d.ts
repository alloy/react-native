import AnimatedValue from '../nodes/AnimatedValue';
import AnimatedValueXY from '../nodes/AnimatedValueXY';
import AnimatedInterpolation from '../nodes/AnimatedInterpolation';
import Animation from './Animation';
import { AnimationConfig, EndCallback } from "./Animation";
export declare type TimingAnimationConfig = AnimationConfig & {
    toValue: number | AnimatedValue | {
        x: number;
        y: number;
    } | AnimatedValueXY | AnimatedInterpolation;
    easing?: ((value: number) => number);
    duration?: number;
    delay?: number;
};
export declare type TimingAnimationConfigSingle = AnimationConfig & {
    toValue: number | AnimatedValue | AnimatedInterpolation;
    easing?: ((value: number) => number);
    duration?: number;
    delay?: number;
};
declare class TimingAnimation extends Animation {
    _startTime: number;
    _fromValue: number;
    _toValue: any;
    _duration: number;
    _delay: number;
    _easing: ((value: number) => number);
    _onUpdate: ((value: number) => void);
    _animationFrame: any;
    _timeout: any;
    _useNativeDriver: boolean;
    constructor(config: TimingAnimationConfigSingle);
    __getNativeAnimationConfig(): any;
    start(fromValue: number, onUpdate: ((value: number) => void), onEnd: EndCallback | null | undefined, previousAnimation: Animation | null | undefined, animatedValue: AnimatedValue): void;
    onUpdate(): void;
    stop(): void;
}
export default TimingAnimation;
