'use strict';
import { $ReadOnly } from "utility-types";












import UTFSequence from "../../UTFSequence";
import stringifySafe from "../../Utilities/stringifySafe";
import { ExceptionData } from "../../Core/NativeExceptionsManager";
import { LogBoxLogData } from "./LogBoxLog";

const BABEL_TRANSFORM_ERROR_FORMAT = /^(?:TransformError )?(?:SyntaxError: |ReferenceError: )(.*): (.*) \((\d+):(\d+)\)\n\n([\s\S]+)/;
const BABEL_CODE_FRAME_ERROR_FORMAT = /^(?:TransformError )?(?:.*): (.*): ([\s\S]+?)\n([ >]{2}[\d\s]+ \|[\s\S]+|\u{001b}[\s\S]+)/u;

export type ExtendedExceptionData = ExceptionData & {
  isComponentError: boolean;

};
export type Category = string;
export type CodeFrame = $ReadOnly<{
  content: string;
  location: {
    row: number;
    column: number;

  } | null | undefined;
  fileName: string;
}>;
export type Message = $ReadOnly<{
  content: string;
  substitutions: ReadonlyArray<$ReadOnly<{
    length: number;
    offset: number;
  }>>;
}>;

export type ComponentStack = ReadonlyArray<CodeFrame>;

const SUBSTITUTION = UTFSequence.BOM + '%s';

export function parseCategory(args: ReadonlyArray<unknown>): $ReadOnly<{
  category: Category;
  message: Message;
}> {
  return null as any;
}

export function parseComponentStack(message: string): ComponentStack {
  return null as any;
}

export function parseLogBoxException(error: ExtendedExceptionData): LogBoxLogData {
  return null as any;
}

export function parseLogBoxLog(args: ReadonlyArray<unknown>): {
  componentStack: ComponentStack;
  category: Category;
  message: Message;
} {
  return null as any;
}
