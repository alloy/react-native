'use strict';












type HermesStackLocationNative = {
  readonly type: "NATIVE";
};

type HermesStackLocationSource = {
  readonly type: "SOURCE";
  readonly sourceUrl: string;
  readonly line1Based: number;
  readonly column1Based: number;
};

type HermesStackLocationBytecode = {
  readonly type: "BYTECODE";
  readonly sourceUrl: string;
  readonly line1Based: number;
  readonly virtualOffset0Based: number;
};

type HermesStackLocation = HermesStackLocationNative | HermesStackLocationSource | HermesStackLocationBytecode;

type HermesStackEntryFrame = {
  readonly type: "FRAME";
  readonly location: HermesStackLocation;
  readonly functionName: string;
};

type HermesStackEntrySkipped = {
  readonly type: "SKIPPED";
  readonly count: number;
};

type HermesStackEntry = HermesStackEntryFrame | HermesStackEntrySkipped;

export type HermesParsedStack = {
  readonly message: string;
  readonly entries: ReadonlyArray<HermesStackEntry>;
};

// Capturing groups:
// 1. function name
// 2. is this a native stack frame?
// 3. is this a bytecode address or a source location?
// 4. source URL (filename)
// 5. line number (1 based)
// 6. column number (1 based) or virtual offset (0 based)
const RE_FRAME = /^ {4}at (.+?)(?: \((native)\)?| \((address at )?(.+?):(\d+):(\d+)\))$/;

// Capturing groups:
// 1. count of skipped frames
const RE_SKIPPED = /^ {4}... skipping (\d+) frames$/;

function parseLine(line: string): HermesStackEntry | null | undefined {
  return null as any;
}

export default function parseHermesStack(stack: string): HermesParsedStack {
  return null as any;
};;
