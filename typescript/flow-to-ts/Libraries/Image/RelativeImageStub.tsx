yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Image/RelativeImageStub.js
'use strict';












// This is a stub for flow to make it understand require('./icon.png')
// See metro/src/Bundler/index.js

const AssetRegistry = require('./AssetRegistry');

module.exports = (AssetRegistry.registerAsset({
  __packager_asset: true,
  fileSystemLocation: '/full/path/to/directory',
  httpServerLocation: '/assets/full/path/to/directory',
  width: 100,
  height: 100,
  scales: [1, 2, 3],
  hash: 'nonsense',
  name: 'icon',
  type: 'png'
}) as number);
Done in 0.49s.
