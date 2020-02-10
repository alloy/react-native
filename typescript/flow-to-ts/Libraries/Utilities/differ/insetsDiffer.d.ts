declare type Inset = {
    top: number | null | undefined;
    left: number | null | undefined;
    right: number | null | undefined;
    bottom: number | null | undefined;
};
declare const insetsDiffer: (one: Inset, two: Inset) => boolean;
export default insetsDiffer;
