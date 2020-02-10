/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
declare const TouchHistoryMath: {
    /**
     * This code is optimized and not intended to look beautiful. This allows
     * computing of touch centroids that have moved after `touchesChangedAfter`
     * timeStamp. You can compute the current centroid involving all touches
     * moves after `touchesChangedAfter`, or you can compute the previous
     * centroid of all touches that were moved after `touchesChangedAfter`.
     *
     * @param {TouchHistoryMath} touchHistory Standard Responder touch track
     * data.
     * @param {number} touchesChangedAfter timeStamp after which moved touches
     * are considered "actively moving" - not just "active".
     * @param {boolean} isXAxis Consider `x` dimension vs. `y` dimension.
     * @param {boolean} ofCurrent Compute current centroid for actively moving
     * touches vs. previous centroid of now actively moving touches.
     * @return {number} value of centroid in specified dimension.
     */
    centroidDimension: (touchHistory: any, touchesChangedAfter: any, isXAxis: any, ofCurrent: any) => number;
    currentCentroidXOfTouchesChangedAfter: (touchHistory: any, touchesChangedAfter: any) => number;
    currentCentroidYOfTouchesChangedAfter: (touchHistory: any, touchesChangedAfter: any) => number;
    previousCentroidXOfTouchesChangedAfter: (touchHistory: any, touchesChangedAfter: any) => number;
    previousCentroidYOfTouchesChangedAfter: (touchHistory: any, touchesChangedAfter: any) => number;
    currentCentroidX: (touchHistory: any) => number;
    currentCentroidY: (touchHistory: any) => number;
    noCentroid: number;
};
export default TouchHistoryMath;
