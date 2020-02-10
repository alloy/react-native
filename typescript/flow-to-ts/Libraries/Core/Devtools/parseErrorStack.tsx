'use strict';;
import parseHermesStack from './parseHermesStack';
import stacktraceParser from 'stacktrace-parser';












import { StackFrame } from "../NativeExceptionsManager";
import { HermesParsedStack } from "./parseHermesStack";

export type ExtendedError = Error & {
  jsEngine?: string;
  preventSymbolication?: boolean;
  componentStack?: string;
  forceRedbox?: boolean;
  isComponentError?: boolean;

};

function convertHermesStack(stack: HermesParsedStack): Array<StackFrame> {
  return null as any;
}

function parseErrorStack(e: ExtendedError): Array<StackFrame> {
  return null as any;
}

export default parseErrorStack;;
