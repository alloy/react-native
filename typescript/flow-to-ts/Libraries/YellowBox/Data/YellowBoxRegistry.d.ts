import YellowBoxWarning from './YellowBoxWarning';
import { $ReadOnly } from "utility-types";
import { Category } from "./YellowBoxCategory";
import { Stack } from "./YellowBoxSymbolication";
export declare type Registry = Map<Category, ReadonlyArray<YellowBoxWarning>>;
export declare type Observer = ((registry: Registry) => void);
export declare type IgnorePattern = string | RegExp;
export declare type Subscription = $ReadOnly<{
    unsubscribe: (() => void);
}>;
declare const YellowBoxRegistry: {
    isWarningIgnored(message: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        content: string;
        substitutions: readonly import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
            length: any;
            offset: any;
        }>[];
    }>): boolean;
    add({ category, message, stack }: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        category: string;
        message: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
            content: any;
            substitutions: any;
        }>;
        stack: Stack;
    }>): void;
    delete(category: string): void;
    clear(): void;
    addIgnorePatterns(patterns: readonly (string | RegExp)[]): void;
    setDisabled(value: boolean): void;
    isDisabled(): boolean;
    observe(observer: Observer): import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        unsubscribe: () => void;
    }>;
};
export default YellowBoxRegistry;
