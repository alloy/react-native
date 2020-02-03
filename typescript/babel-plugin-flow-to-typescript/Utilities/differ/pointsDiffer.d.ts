declare type Point = {
    x: number | undefined | null;
    y: number | undefined | null;
};
declare const dummyPoint: {
    x: any;
    y: any;
};
declare const pointsDiffer: (one: Point, two: Point) => boolean;
