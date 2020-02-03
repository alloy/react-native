import { StackFrame } from '../NativeExceptionsManager';
export declare type CodeFrame = Readonly<{
    content: string;
    location: {
        row: number;
        column: number;
    } | undefined | null;
    fileName: string;
}>;
export declare type SymbolicatedStackTrace = Readonly<{
    stack: Array<StackFrame>;
    codeFrame: CodeFrame | undefined | null;
}>;
