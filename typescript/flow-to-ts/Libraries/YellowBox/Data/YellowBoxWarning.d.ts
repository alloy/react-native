import { $ReadOnly } from "utility-types";
import { Category, Message } from "./YellowBoxCategory";
import { Stack } from "./YellowBoxSymbolication";
export declare type SymbolicationRequest = $ReadOnly<{
    abort: (() => void);
}>;
declare class YellowBoxWarning {
    static parse({ args }: $ReadOnly<{
        args: ReadonlyArray<unknown>;
    }>): {
        category: Category;
        message: Message;
        stack: Stack;
    };
    message: Message;
    stack: Stack;
    symbolicated: $ReadOnly<{
        error: null;
        stack: null;
        status: "NONE";
    }> | $ReadOnly<{
        error: null;
        stack: null;
        status: "PENDING";
    }> | $ReadOnly<{
        error: null;
        stack: Stack;
        status: "COMPLETE";
    }> | $ReadOnly<{
        error: Error;
        stack: null;
        status: "FAILED";
    }>;
    constructor(message: Message, stack: Stack);
    getAvailableStack(): Stack;
    retrySymbolicate(callback: (() => void)): SymbolicationRequest;
    symbolicate(callback: (() => void)): SymbolicationRequest;
}
export default YellowBoxWarning;
