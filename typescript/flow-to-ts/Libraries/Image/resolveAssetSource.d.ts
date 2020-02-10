import { ResolvedAssetSource } from "./AssetSourceResolver";
/**
 * `source` is either a number (opaque type returned by require('./foo.png'))
 * or an `ImageSource` like { uri: '<http location || file path>' }
 */
declare function resolveAssetSource(source: any): ResolvedAssetSource | null | undefined;
export default resolveAssetSource;
