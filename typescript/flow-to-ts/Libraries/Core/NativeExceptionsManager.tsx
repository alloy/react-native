'use strict';;
import Platform from '../Utilities/Platform';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export type StackFrame = {
  column: number | null | undefined;
  file: string | null | undefined;
  lineNumber: number | null | undefined;
  methodName: string;
  collapse?: boolean;
};

export type ExceptionData = {
  message: string;
  originalMessage: string | null | undefined;
  name: string | null | undefined;
  componentStack: string | null | undefined;
  stack: Array<StackFrame>;
  id: number;
  isFatal: boolean;
  // flowlint-next-line unclear-type:off
  extraData?: any;

};

export interface Spec extends TurboModule {
  // Deprecated: Use `reportException`
  readonly reportFatalException: ((message: string, stack: Array<StackFrame>, exceptionId: number) => void);
  // Deprecated: Use `reportException`
  readonly reportSoftException: ((message: string, stack: Array<StackFrame>, exceptionId: number) => void);
  // TODO(T53311281): This is a noop on iOS now. Implement it.
  readonly reportException?: ((data: ExceptionData) => void);
  readonly updateExceptionMessage: ((message: string, stack: Array<StackFrame>, exceptionId: number) => void);
  // TODO(T53311281): This is a noop on iOS now. Implement it.
  readonly dismissRedbox?: (() => void);
}

const NativeModule = TurboModuleRegistry.getEnforcing<Spec>('ExceptionsManager');

const ExceptionsManager = {
  reportFatalException(message: string, stack: Array<StackFrame>, exceptionId: number) {
    NativeModule.reportFatalException(message, stack, exceptionId);
  },
  reportSoftException(message: string, stack: Array<StackFrame>, exceptionId: number) {
    NativeModule.reportSoftException(message, stack, exceptionId);
  },
  updateExceptionMessage(message: string, stack: Array<StackFrame>, exceptionId: number) {
    NativeModule.updateExceptionMessage(message, stack, exceptionId);
  },
  dismissRedbox(): void {
    if (Platform.OS !== 'ios' && NativeModule.dismissRedbox) {
      // TODO(T53311281): This is a noop on iOS now. Implement it.
      NativeModule.dismissRedbox();
    }
  },
  reportException(data: ExceptionData): void {
    if (NativeModule.reportException) {
      NativeModule.reportException(data);
      return;
    }
    if (data.isFatal) {
      ExceptionsManager.reportFatalException(data.message, data.stack, data.id);
    } else {
      ExceptionsManager.reportSoftException(data.message, data.stack, data.id);
    }
  }
};

export default ExceptionsManager;
