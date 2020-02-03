declare type Inset = {
    top: number | null | undefined;
    left: number | null | undefined;
    right: number | null | undefined;
    bottom: number | null | undefined;
};
declare const dummyInsets: {
    top: any;
    left: any;
    right: any;
    bottom: any;
};
declare const insetsDiffer: (one: Inset, two: Inset) => boolean;
