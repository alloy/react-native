import { $ReadOnly } from "utility-types";
import { StackFrame } from "../NativeExceptionsManager";
export declare type CodeFrame = $ReadOnly<{
    content: string;
    location: {
        row: number;
        column: number;
    } | null | undefined;
    fileName: string;
}>;
export declare type SymbolicatedStackTrace = $ReadOnly<{
    stack: Array<StackFrame>;
    codeFrame: CodeFrame | null | undefined;
}>;
declare function symbolicateStackTrace(stack: Array<StackFrame>): Promise<SymbolicatedStackTrace>;
export default symbolicateStackTrace;
