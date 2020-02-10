'use strict';












import { PackagerAsset } from "./AssetRegistry";

const androidScaleSuffix = {
  '0.75': 'ldpi',
  '1': 'mdpi',
  '1.5': 'hdpi',
  '2': 'xhdpi',
  '3': 'xxhdpi',
  '4': 'xxxhdpi'
};

/**
 * FIXME: using number to represent discrete scale numbers is fragile in essence because of
 * floating point numbers imprecision.
 */
function getAndroidAssetSuffix(scale: number): string {
  return null as any;
}

// See https://developer.android.com/guide/topics/resources/drawable-resource.html
const drawableFileTypes = new Set(['gif', 'jpeg', 'jpg', 'png', 'svg', 'webp', 'xml']);

function getAndroidResourceFolderName(asset: PackagerAsset, scale: number): string | $TEMPORARY$string<"raw"> {
  return null as any;
}

function getAndroidResourceIdentifier(asset: PackagerAsset): string {
  return null as any;
}

function getBasePath(asset: PackagerAsset): string {
  return null as any;
}

export default {
  getAndroidAssetSuffix: getAndroidAssetSuffix,
  getAndroidResourceFolderName: getAndroidResourceFolderName,
  getAndroidResourceIdentifier: getAndroidResourceIdentifier,
  getBasePath: getBasePath
};;
