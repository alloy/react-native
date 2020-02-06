'use strict';;
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

export default { registerAsset, getAssetByID };
