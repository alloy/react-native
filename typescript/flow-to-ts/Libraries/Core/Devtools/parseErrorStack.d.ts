import { StackFrame } from "../NativeExceptionsManager";
export declare type ExtendedError = Error & {
    jsEngine?: string;
    preventSymbolication?: boolean;
    componentStack?: string;
    forceRedbox?: boolean;
    isComponentError?: boolean;
};
declare function parseErrorStack(e: ExtendedError): Array<StackFrame>;
export default parseErrorStack;
