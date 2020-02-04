yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/differ/sizesDiffer.js
'use strict';











const dummySize = { width: undefined, height: undefined };

const sizesDiffer = function (one, two) {
  one = one || dummySize;
  two = two || dummySize;
  return one !== two && (one.width !== two.width || one.height !== two.height);
};

module.exports = sizesDiffer;
Done in 0.46s.
