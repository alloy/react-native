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