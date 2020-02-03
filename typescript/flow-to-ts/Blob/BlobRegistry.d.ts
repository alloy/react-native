/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */
declare const registry: {
    [key: string]: number;
};
declare const register: (id: string) => void;
declare const unregister: (id: string) => void;
declare const has: (id: string) => number | boolean;
