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
