/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */
'use strict';

export type PackagerAsset = {
  readonly __packager_asset: boolean;
  readonly fileSystemLocation: string;
  readonly httpServerLocation: string;
  readonly width: number | undefined | null;
  readonly height: number | undefined | null;
  readonly scales: Array<number>;
  readonly hash: string;
  readonly name: string;
  readonly type: string;
};
const assets: Array<PackagerAsset> = [];

function registerAsset(asset: PackagerAsset): number {
  // `push` returns new array length, so the first asset will
  // get id 1 (not 0) to make the value truthy
  return assets.push(asset);
}

function getAssetByID(assetId: number): PackagerAsset {
  return assets[assetId - 1];
}

module.exports = {
  registerAsset,
  getAssetByID
};