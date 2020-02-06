'use strict';;
import { $ReadOnly } from "utility-types";












const YellowBoxCategory = require('./YellowBoxCategory');
const YellowBoxSymbolication = require('./YellowBoxSymbolication');

const parseErrorStack = require('../../Core/Devtools/parseErrorStack');

import { Category, Message } from "./YellowBoxCategory";
import { Stack } from "./YellowBoxSymbolication";

export type SymbolicationRequest = $ReadOnly<{
  abort: () => void;
}>;

class YellowBoxWarning {

  static parse({
    args
  }: $ReadOnly<{
    args: ReadonlyArray<unknown>;
  }>): {
    category: Category;
    message: Message;
    stack: Stack;
  } {
    let mutableArgs: Array<unknown> = [...args];

    // This detects a very narrow case of a simple warning string,
    // with a component stack appended by React DevTools.
    // In this case, we convert the component stack to a substituion,
    // because YellowBox formats those pleasantly.
    // If there are other subtituations or formatting,
    // we bail to avoid potentially corrupting the data.
    if (mutableArgs.length === 2) {
      const first = mutableArgs[0];
      const last = mutableArgs[1];
      if (typeof first === 'string' && typeof last === 'string' && /^\n {4}in/.exec(last)) {
        mutableArgs[0] = first + '%s';
      }
    }

    return {
      ...YellowBoxCategory.parse(mutableArgs),
      // TODO: Use Error.captureStackTrace on Hermes
      stack: parseErrorStack(new Error())
    };
  }

  message: Message;
  stack: Stack;
  symbolicated: $ReadOnly<{error: null;stack: null;status: "NONE";}> | $ReadOnly<{error: null;stack: null;status: "PENDING";}> | $ReadOnly<{error: null;stack: Stack;status: "COMPLETE";}> | $ReadOnly<{error: Error;stack: null;status: "FAILED";}> = {
    error: null,
    stack: null,
    status: 'NONE'
  };

  constructor(message: Message, stack: Stack) {
    this.message = message;
    this.stack = stack;
  }

  getAvailableStack(): Stack {
    return this.symbolicated.status === 'COMPLETE' ? this.symbolicated.stack : this.stack;
  }

  retrySymbolicate(callback: () => void): SymbolicationRequest {
    YellowBoxSymbolication.delete(this.stack);
    return this.symbolicate(callback);
  }

  symbolicate(callback: () => void): SymbolicationRequest {
    let aborted = false;

    if (this.symbolicated.status !== 'COMPLETE') {
      const updateStatus = (error: Error | null | undefined, stack: Stack | null | undefined): void => {
        if (error != null) {
          this.symbolicated = { error, stack: null, status: 'FAILED' };
        } else if (stack != null) {
          this.symbolicated = { error: null, stack, status: 'COMPLETE' };
        } else {
          this.symbolicated = { error: null, stack: null, status: 'PENDING' };
        }
        if (!aborted) {
          callback();
        }
      };

      updateStatus(null, null);
      YellowBoxSymbolication.symbolicate(this.stack).then(stack => {
        updateStatus(null, stack);
      }, error => {
        updateStatus(error, null);
      });
    }

    return {
      abort(): void {
        aborted = true;
      }
    };
  }
}

export default YellowBoxWarning;
