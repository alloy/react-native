import AnimatedInterpolation from './AnimatedInterpolation';
import AnimatedNode from './AnimatedNode';
import AnimatedWithChildren from './AnimatedWithChildren';
import { InterpolationConfigType } from "./AnimatedInterpolation";
declare class AnimatedModulo extends AnimatedWithChildren {
    _a: AnimatedNode;
    _modulus: number;
    constructor(a: AnimatedNode, modulus: number);
    __makeNative(): void;
    __getValue(): number;
    interpolate(config: InterpolationConfigType): AnimatedInterpolation;
    __attach(): void;
    __detach(): void;
    __getNativeConfig(): any;
}
export default AnimatedModulo;
