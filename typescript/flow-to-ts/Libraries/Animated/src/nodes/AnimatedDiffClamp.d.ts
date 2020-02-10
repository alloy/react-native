import AnimatedInterpolation from './AnimatedInterpolation';
import AnimatedNode from './AnimatedNode';
import AnimatedWithChildren from './AnimatedWithChildren';
import { InterpolationConfigType } from "./AnimatedInterpolation";
declare class AnimatedDiffClamp extends AnimatedWithChildren {
    _a: AnimatedNode;
    _min: number;
    _max: number;
    _value: number;
    _lastValue: number;
    constructor(a: AnimatedNode, min: number, max: number);
    __makeNative(): void;
    interpolate(config: InterpolationConfigType): AnimatedInterpolation;
    __getValue(): number;
    __attach(): void;
    __detach(): void;
    __getNativeConfig(): any;
}
export default AnimatedDiffClamp;
