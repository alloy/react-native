yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/differ/insetsDiffer.js
'use strict';












type Inset = {
  top: number | null | undefined;
  left: number | null | undefined;
  right: number | null | undefined;
  bottom: number | null | undefined;

};

const dummyInsets = {
  top: undefined,
  left: undefined,
  right: undefined,
  bottom: undefined
};

const insetsDiffer = function (one: Inset, two: Inset): boolean {
  one = one || dummyInsets;
  two = two || dummyInsets;
  return one !== two && (one.top !== two.top || one.left !== two.left || one.right !== two.right || one.bottom !== two.bottom);
};

module.exports = insetsDiffer;
Done in 0.47s.
