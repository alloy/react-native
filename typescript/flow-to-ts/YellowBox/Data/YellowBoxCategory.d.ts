import { $ReadOnly } from "utility-types";
export declare type Category = string;
export declare type Message = $ReadOnly<{
    content: string;
    substitutions: ReadonlyArray<$ReadOnly<{
        length: number;
        offset: number;
    }>>;
}>;
