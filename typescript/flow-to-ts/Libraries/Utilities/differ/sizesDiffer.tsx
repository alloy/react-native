'use strict';;
const dummySize = { width: undefined, height: undefined };

const sizesDiffer = function (one, two) {
  one = one || dummySize;
  two = two || dummySize;
  return one !== two && (one.width !== two.width || one.height !== two.height);
};

export default sizesDiffer;
