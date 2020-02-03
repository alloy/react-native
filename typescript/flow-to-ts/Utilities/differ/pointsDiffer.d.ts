declare type Point = {
    x: number | null | undefined;
    y: number | null | undefined;
};
declare const dummyPoint: {
    x: any;
    y: any;
};
declare const pointsDiffer: (one: Point, two: Point) => boolean;
