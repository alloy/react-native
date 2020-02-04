yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/LogBox/Data/LogBoxSymbolication.js
'use strict';












import symbolicateStackTrace from "../../Core/Devtools/symbolicateStackTrace";

import { StackFrame } from "../../Core/NativeExceptionsManager";
import { SymbolicatedStackTrace } from "../../Core/Devtools/symbolicateStackTrace";

export type Stack = Array<StackFrame>;

const cache: Map<Stack, Promise<SymbolicatedStackTrace>> = new Map();

/**
 * Sanitize because sometimes, `symbolicateStackTrace` gives us invalid values.
 */
const sanitize = ({
  stack: maybeStack,
  codeFrame
}: SymbolicatedStackTrace): SymbolicatedStackTrace => {
  if (!Array.isArray(maybeStack)) {
    throw new Error('Expected stack to be an array.');
  }
  const stack = [];
  for (const maybeFrame of maybeStack) {
    let collapse = false;
    if ('collapse' in maybeFrame) {
      if (typeof maybeFrame.collapse !== 'boolean') {
        throw new Error('Expected stack frame `collapse` to be a boolean.');
      }
      collapse = maybeFrame.collapse;
    }
    stack.push({
      column: maybeFrame.column,
      file: maybeFrame.file,
      lineNumber: maybeFrame.lineNumber,
      methodName: maybeFrame.methodName,
      collapse
    });
  }
  return { stack, codeFrame };
};

export function deleteStack(stack: Stack): void {
  cache.delete(stack);
}

export function symbolicate(stack: Stack): Promise<SymbolicatedStackTrace> {
  let promise = cache.get(stack);
  if (promise == null) {
    promise = symbolicateStackTrace(stack).then(sanitize);
    cache.set(stack, promise);
  }

  return promise;
}
Done in 0.47s.
