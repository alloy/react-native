/**
 * Portions Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */
declare const NEWTON_ITERATIONS = 4;
declare const NEWTON_MIN_SLOPE = 0.001;
declare const SUBDIVISION_PRECISION = 1e-7;
declare const SUBDIVISION_MAX_ITERATIONS = 10;
declare const kSplineTableSize = 11;
declare const kSampleStepSize: number;
declare const float32ArraySupported: boolean;
declare function A(aA1: any, aA2: any): number;
declare function B(aA1: any, aA2: any): number;
declare function C(aA1: any): number;
declare function calcBezier(aT: any, aA1: any, aA2: any): number;
declare function getSlope(aT: any, aA1: any, aA2: any): number;
declare function binarySubdivide(aX: any, _aA: any, _aB: any, mX1: any, mX2: any): any;
declare function newtonRaphsonIterate(aX: any, _aGuessT: any, mX1: any, mX2: any): any;
