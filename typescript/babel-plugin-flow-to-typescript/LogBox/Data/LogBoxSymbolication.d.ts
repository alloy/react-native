import { StackFrame } from '../../Core/NativeExceptionsManager';
import { SymbolicatedStackTrace } from '../../Core/Devtools/symbolicateStackTrace';
export declare type Stack = Array<StackFrame>;
export declare function deleteStack(stack: Stack): void;
export declare function symbolicate(stack: Stack): Promise<SymbolicatedStackTrace>;
