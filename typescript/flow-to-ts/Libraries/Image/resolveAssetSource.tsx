'use strict';;
import AssetRegistry from './AssetRegistry';
import AssetSourceResolver from './AssetSourceResolver';
import _Import0 from '../NativeModules/specs/NativeSourceCode';

import { ResolvedAssetSource } from "./AssetSourceResolver";

let _customSourceTransformer, _serverURL, _scriptURL;

let _sourceCodeScriptURL: string | null | undefined;
function getSourceCodeScriptURL(): string | null | undefined {
  return null as any;
}

function getDevServerURL(): string | null | undefined {
  return null as any;
}

function _coerceLocalScriptURL(scriptURL: string | null | undefined): string | null | undefined {
  return null as any;
}

function getScriptURL(): string | null | undefined {
  return null as any;
}

function setCustomSourceTransformer(transformer: ((resolver: AssetSourceResolver) => ResolvedAssetSource)): void {}

/**
 * `source` is either a number (opaque type returned by require('./foo.png'))
 * or an `ImageSource` like { uri: '<http location || file path>' }
 */
function resolveAssetSource(source: any): ResolvedAssetSource | null | undefined {
  return null as any;
}

export default resolveAssetSource;;
module.exports.pickScale = AssetSourceResolver.pickScale;
module.exports.setCustomSourceTransformer = setCustomSourceTransformer;
