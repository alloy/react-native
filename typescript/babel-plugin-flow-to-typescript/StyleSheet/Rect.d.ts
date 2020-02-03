export declare type Rect = Readonly<{
    bottom?: number | null;
    left?: number | null;
    right?: number | null;
    top?: number | null;
}>;
export declare type RectOrSize = Rect | number;
export declare function createSquare(size: number): Rect;
export declare function normalizeRect(rectOrSize?: RectOrSize | null): Rect | undefined | null;
