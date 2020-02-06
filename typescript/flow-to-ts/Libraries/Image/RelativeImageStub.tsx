'use strict';;
import AssetRegistry from './AssetRegistry';

export default AssetRegistry.registerAsset({
  __packager_asset: true,
  fileSystemLocation: '/full/path/to/directory',
  httpServerLocation: '/assets/full/path/to/directory',
  width: 100,
  height: 100,
  scales: [1, 2, 3],
  hash: 'nonsense',
  name: 'icon',
  type: 'png'
}) as number;
