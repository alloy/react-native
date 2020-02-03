/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */
'use strict';

type Inset = {
  top: number | undefined | null;
  left: number | undefined | null;
  right: number | undefined | null;
  bottom: number | undefined | null;
};
const dummyInsets = {
  top: undefined,
  left: undefined,
  right: undefined,
  bottom: undefined
};

const insetsDiffer = function (one: Inset, two: Inset): boolean {
  one = one || dummyInsets;
  two = two || dummyInsets;
  return one !== two && (one.top !== two.top || one.left !== two.left || one.right !== two.right || one.bottom !== two.bottom);
};

module.exports = insetsDiffer;