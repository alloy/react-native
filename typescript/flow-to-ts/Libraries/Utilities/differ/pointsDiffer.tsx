yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/differ/pointsDiffer.js
'use strict';












type Point = {
  x: number | null | undefined;
  y: number | null | undefined;

};

const dummyPoint = { x: undefined, y: undefined };

const pointsDiffer = function (one: Point | null | undefined, two: Point | null | undefined): boolean {
  one = one || dummyPoint;
  two = two || dummyPoint;
  return one !== two && (one.x !== two.x || one.y !== two.y);
};

module.exports = pointsDiffer;
Done in 0.49s.
