declare type Point = {
    x: number | null | undefined;
    y: number | null | undefined;
};
declare const pointsDiffer: (one: Point | null | undefined, two: Point | null | undefined) => boolean;
export default pointsDiffer;
