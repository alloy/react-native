/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */
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
