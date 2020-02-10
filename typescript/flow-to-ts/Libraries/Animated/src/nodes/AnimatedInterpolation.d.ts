import AnimatedNode from './AnimatedNode';
import AnimatedWithChildren from './AnimatedWithChildren';
declare type ExtrapolateType = "extend" | "identity" | "clamp";
export declare type InterpolationConfigType = {
    inputRange: Array<number>;
    outputRange: Array<number> | Array<string>;
    easing?: ((input: number) => number);
    extrapolate?: ExtrapolateType;
    extrapolateLeft?: ExtrapolateType;
    extrapolateRight?: ExtrapolateType;
};
declare class AnimatedInterpolation extends AnimatedWithChildren {
    static __createInterpolation: ((config: InterpolationConfigType) => ((input: number) => number | string));
    _parent: AnimatedNode;
    _config: InterpolationConfigType;
    _interpolation: ((input: number) => number | string);
    constructor(parent: AnimatedNode, config: InterpolationConfigType);
    __makeNative(): void;
    __getValue(): number | string;
    interpolate(config: InterpolationConfigType): AnimatedInterpolation;
    __attach(): void;
    __detach(): void;
    __transformDataType(range: Array<any>): Array<any>;
    __getNativeConfig(): any;
}
export default AnimatedInterpolation;
