/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */
export declare type Options = Readonly<{
    date?: (Date | number) | null;
    minDate?: (Date | number) | null;
    maxDate?: (Date | number) | null;
    mode?: ("calendar" | "spinner" | "default") | null;
}>;
export declare type DatePickerOpenAction = {
    action: "dateSetAction";
    year: number;
    month: number;
    day: number;
} | {
    action: "dismissedAction";
    year: void;
    month: void;
    day: void;
};
