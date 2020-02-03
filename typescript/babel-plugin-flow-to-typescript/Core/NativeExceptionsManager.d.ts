import { TurboModule } from '../TurboModule/RCTExport';
export declare type StackFrame = {
    column: number | undefined | null;
    file: string | undefined | null;
    lineNumber: number | undefined | null;
    methodName: string;
    collapse?: boolean;
};
export declare type ExceptionData = {
    message: string;
    originalMessage: string | undefined | null;
    name: string | undefined | null;
    componentStack: string | undefined | null;
    stack: Array<StackFrame>;
    id: number;
    isFatal: boolean;
    extraData?: object;
};
export interface Spec extends TurboModule {
    readonly reportFatalException: (message: string, stack: Array<StackFrame>, exceptionId: number) => void;
    readonly reportSoftException: (message: string, stack: Array<StackFrame>, exceptionId: number) => void;
    readonly reportException?: (data: ExceptionData) => void;
    readonly updateExceptionMessage: (message: string, stack: Array<StackFrame>, exceptionId: number) => void;
    readonly dismissRedbox?: () => void;
}
declare const ExceptionsManager: {
    reportFatalException(message: string, stack: StackFrame[], exceptionId: number): void;
    reportSoftException(message: string, stack: StackFrame[], exceptionId: number): void;
    updateExceptionMessage(message: string, stack: StackFrame[], exceptionId: number): void;
    dismissRedbox(): void;
    reportException(data: ExceptionData): void;
};
export default ExceptionsManager;
