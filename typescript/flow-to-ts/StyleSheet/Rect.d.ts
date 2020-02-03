import { $ReadOnly } from "utility-types";
export declare type Rect = $ReadOnly<{
    bottom?: number | null | undefined;
    left?: number | null | undefined;
    right?: number | null | undefined;
    top?: number | null | undefined;
}>;
export declare type RectOrSize = Rect | number;
export declare function createSquare(size: number): Rect;
export declare function normalizeRect(rectOrSize: RectOrSize | null | undefined): Rect | null | undefined;
