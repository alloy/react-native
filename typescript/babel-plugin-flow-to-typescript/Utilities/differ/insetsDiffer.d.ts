declare type Inset = {
    top: number | undefined | null;
    left: number | undefined | null;
    right: number | undefined | null;
    bottom: number | undefined | null;
};
declare const dummyInsets: {
    top: any;
    left: any;
    right: any;
    bottom: any;
};
declare const insetsDiffer: (one: Inset, two: Inset) => boolean;
