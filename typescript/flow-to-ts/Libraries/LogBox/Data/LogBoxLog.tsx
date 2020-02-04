yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/LogBox/Data/LogBoxLog.js
'use strict';
import { $ReadOnly } from "utility-types";












import * as LogBoxSymbolication from "./LogBoxSymbolication";

import { Category, Message, ComponentStack, CodeFrame } from "./parseLogBoxLog";
import { Stack } from "./LogBoxSymbolication";

type SymbolicationStatus = "NONE" | "PENDING" | "COMPLETE" | "FAILED";

export type LogLevel = "warn" | "error" | "fatal" | "syntax";

export type LogBoxLogData = $ReadOnly<{
  level: LogLevel;
  message: Message;
  stack: Stack;
  category: string;
  componentStack: ComponentStack;
  codeFrame?: CodeFrame | null | undefined;
  isComponentError: boolean;
}>;

class LogBoxLog {

  message: Message;
  category: Category;
  componentStack: ComponentStack;
  stack: Stack;
  count: number;
  level: LogLevel;
  codeFrame: CodeFrame | null | undefined;
  isComponentError: boolean;
  symbolicated: $ReadOnly<{error: null;stack: null;status: "NONE";}> | $ReadOnly<{error: null;stack: null;status: "PENDING";}> | $ReadOnly<{error: null;stack: Stack;status: "COMPLETE";}> | $ReadOnly<{error: Error;stack: null;status: "FAILED";}> = {
    error: null,
    stack: null,
    status: 'NONE'
  };

  constructor(data: LogBoxLogData) {
    this.level = data.level;
    this.message = data.message;
    this.stack = data.stack;
    this.category = data.category;
    this.componentStack = data.componentStack;
    this.codeFrame = data.codeFrame;
    this.isComponentError = data.isComponentError;
    this.count = 1;
  }

  incrementCount(): void {
    this.count += 1;
  }

  getAvailableStack(): Stack {
    return this.symbolicated.status === 'COMPLETE' ? this.symbolicated.stack : this.stack;
  }

  retrySymbolicate(callback?: (status: SymbolicationStatus) => void): void {
    if (this.symbolicated.status !== 'COMPLETE') {
      LogBoxSymbolication.deleteStack(this.stack);
      this.handleSymbolicate(callback);
    }
  }

  symbolicate(callback?: (status: SymbolicationStatus) => void): void {
    if (this.symbolicated.status === 'NONE') {
      this.handleSymbolicate(callback);
    }
  }

  handleSymbolicate(callback?: (status: SymbolicationStatus) => void): void {
    if (this.symbolicated.status !== 'PENDING') {
      this.updateStatus(null, null, null, callback);
      LogBoxSymbolication.symbolicate(this.stack).then(data => {
        this.updateStatus(null, (data?.stack), (data?.codeFrame), callback);
      }, error => {
        this.updateStatus(error, null, null, callback);
      });
    }
  }

  updateStatus(error: Error | null | undefined, stack: Stack | null | undefined, codeFrame: CodeFrame | null | undefined, callback?: (status: SymbolicationStatus) => void): void {
    const lastStatus = this.symbolicated.status;
    if (error != null) {
      this.symbolicated = {
        error,
        stack: null,
        status: 'FAILED'
      };
    } else if (stack != null) {
      if (codeFrame) {
        this.codeFrame = codeFrame;
      }

      this.symbolicated = {
        error: null,
        stack,
        status: 'COMPLETE'
      };
    } else {
      this.symbolicated = {
        error: null,
        stack: null,
        status: 'PENDING'
      };
    }

    if (callback && lastStatus !== this.symbolicated.status) {
      callback(this.symbolicated.status);
    }
  }
}

export default LogBoxLog;
Done in 0.50s.
