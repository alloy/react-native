declare type ExtrapolateType = "extend" | "identity" | "clamp";
export declare type InterpolationConfigType = {
    inputRange: Array<number>;
    outputRange: Array<number> | Array<string>;
    easing?: (input: number) => number;
    extrapolate?: ExtrapolateType;
    extrapolateLeft?: ExtrapolateType;
    extrapolateRight?: ExtrapolateType;
};
export {};
