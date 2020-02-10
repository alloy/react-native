import AnimatedInterpolation from './AnimatedInterpolation';
import AnimatedNode from './AnimatedNode';
import AnimatedWithChildren from './AnimatedWithChildren';
import { InterpolationConfigType } from "./AnimatedInterpolation";
declare class AnimatedAddition extends AnimatedWithChildren {
    _a: AnimatedNode;
    _b: AnimatedNode;
    constructor(a: AnimatedNode | number, b: AnimatedNode | number);
    __makeNative(): void;
    __getValue(): number;
    interpolate(config: InterpolationConfigType): AnimatedInterpolation;
    __attach(): void;
    __detach(): void;
    __getNativeConfig(): any;
}
export default AnimatedAddition;
