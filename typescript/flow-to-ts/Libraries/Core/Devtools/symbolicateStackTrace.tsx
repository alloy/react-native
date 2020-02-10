'use strict';;
import getDevServer from './getDevServer';
import _Import0 from '../../Network/fetch';
import { $ReadOnly } from "utility-types";












import NativeSourceCode from "../../NativeModules/specs/NativeSourceCode";

// Avoid requiring fetch on load of this module; see symbolicateStackTrace
let fetch;

import { StackFrame } from "../NativeExceptionsManager";

export type CodeFrame = $ReadOnly<{
  content: string;
  location: {
    row: number;
    column: number;

  } | null | undefined;
  fileName: string;
}>;

export type SymbolicatedStackTrace = $ReadOnly<{
  stack: Array<StackFrame>;
  codeFrame: CodeFrame | null | undefined;
}>;

function isSourcedFromDisk(sourcePath: string): boolean {
  return null as any;
}

async function symbolicateStackTrace(stack: Array<StackFrame>): Promise<SymbolicatedStackTrace> {
  return null as any;
}

export default symbolicateStackTrace;;
