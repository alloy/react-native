import { $ReadOnly } from "utility-types";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

export type Options = $ReadOnly<{
  date?: (Date | number) | null | undefined;
  minDate?: (Date | number) | null | undefined;
  maxDate?: (Date | number) | null | undefined;
  mode?: ("calendar" | "spinner" | "default") | null | undefined;
}>;

export type DatePickerOpenAction = {
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
