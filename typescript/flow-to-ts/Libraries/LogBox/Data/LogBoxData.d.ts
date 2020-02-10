import { $ReadOnly } from "utility-types";
import * as React from "react";
import LogBoxLog from "./LogBoxLog";
import { LogLevel } from "./LogBoxLog";
import { Message, Category, ComponentStack, ExtendedExceptionData } from "./parseLogBoxLog";
import { ExtendedError } from "../../Core/Devtools/parseErrorStack";
export declare type LogBoxLogs = Set<LogBoxLog>;
export declare type LogData = $ReadOnly<{
    level: LogLevel;
    message: Message;
    category: Category;
    componentStack: ComponentStack;
}>;
export declare type Observer = ((arg0: $ReadOnly<{
    logs: LogBoxLogs;
    isDisabled: boolean;
    selectedLogIndex: number;
}>) => void);
export declare type IgnorePattern = string | RegExp;
export declare type Subscription = $ReadOnly<{
    unsubscribe: (() => void);
}>;
export declare type WarningInfo = {
    finalFormat: string;
    forceDialogImmediately: boolean;
    suppressDialog_LEGACY: boolean;
    suppressCompletely: boolean;
    monitorEvent: string | null;
    monitorListVersion: number;
    monitorSampleRate: number;
};
export declare type WarningFilter = ((format: string) => WarningInfo);
declare type AppInfo = $ReadOnly<{
    appVersion: string;
    engine: string;
    onPress?: (() => void) | null | undefined;
}>;
export declare function reportLogBoxError(error: ExtendedError, componentStack?: string): void;
export declare function isLogBoxErrorMessage(message: string): boolean;
export declare function isMessageIgnored(message: string): boolean;
export declare function addLog(log: LogData): void;
export declare function addException(error: ExtendedExceptionData): void;
export declare function symbolicateLogNow(log: LogBoxLog): void;
export declare function retrySymbolicateLogNow(log: LogBoxLog): void;
export declare function symbolicateLogLazy(log: LogBoxLog): void;
export declare function clear(): void;
export declare function setSelectedLog(proposedNewIndex: number): void;
export declare function clearWarnings(): void;
export declare function clearErrors(): void;
export declare function dismiss(log: LogBoxLog): void;
export declare function setWarningFilter(filter: WarningFilter): void;
export declare function setAppInfo(info: (() => AppInfo)): void;
export declare function getAppInfo(): AppInfo | null | undefined;
export declare function checkWarningFilter(format: string): WarningInfo;
export declare function addIgnorePatterns(patterns: ReadonlyArray<IgnorePattern>): void;
export declare function setDisabled(value: boolean): void;
export declare function isDisabled(): boolean;
export declare function observe(observer: Observer): Subscription;
declare type SubscribedComponent = React.AbstractComponent<$ReadOnly<{
    logs: ReadonlyArray<LogBoxLog>;
    isDisabled: boolean;
    selectedLogIndex: number;
}>>;
export declare function withSubscription(WrappedComponent: SubscribedComponent): React.AbstractComponent<{}>;
export {};
