yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Image/AssetRegistry.js
'use strict';












export type PackagerAsset = {
  readonly __packager_asset: boolean;
  readonly fileSystemLocation: string;
  readonly httpServerLocation: string;
  readonly width: number | null | undefined;
  readonly height: number | null | undefined;
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

module.exports = { registerAsset, getAssetByID };
Done in 0.54s.
