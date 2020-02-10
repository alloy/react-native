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
  return null as any;
}

function getAssetByID(assetId: number): PackagerAsset {
  return null as any;
}

export default { registerAsset, getAssetByID };;
