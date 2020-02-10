import { StackFrame } from "../../Core/NativeExceptionsManager";
export declare type Stack = Array<StackFrame>;
declare const YellowBoxSymbolication: {
    delete(stack: Stack): void;
    symbolicate(stack: Stack): Promise<Stack>;
};
export default YellowBoxSymbolication;
