yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Core/Devtools/parseErrorStack.js
'use strict';












import { StackFrame } from "../NativeExceptionsManager";
import { HermesParsedStack } from "./parseHermesStack";

const parseHermesStack = require('./parseHermesStack');

export type ExtendedError = Error & {
  jsEngine?: string;
  preventSymbolication?: boolean;
  componentStack?: string;
  forceRedbox?: boolean;
  isComponentError?: boolean;

};

function convertHermesStack(stack: HermesParsedStack): Array<StackFrame> {
  const frames = [];
  for (const entry of stack.entries) {
    if (entry.type !== 'FRAME') {
      continue;
    }
    const {
      location,
      functionName
    } = entry;
    if (location.type === 'NATIVE') {
      continue;
    }
    frames.push({
      methodName: functionName,
      file: location.sourceUrl,
      lineNumber: location.line1Based,
      column: location.type === 'SOURCE' ? location.column1Based - 1 : location.virtualOffset0Based
    });
  }
  return frames;
}

function parseErrorStack(e: ExtendedError): Array<StackFrame> {
  if (!e || !e.stack) {
    return [];
  }

  const stacktraceParser = require('stacktrace-parser');
  const stack = Array.isArray(e.stack) ? e.stack : global.HermesInternal ? convertHermesStack(parseHermesStack(e.stack)) : stacktraceParser.parse(e.stack).map(frame => ({
    ...frame,
    column: frame.column != null ? frame.column - 1 : null
  }));

  return stack;
}

module.exports = parseErrorStack;
Done in 0.51s.
