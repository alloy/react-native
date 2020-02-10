'use strict';
import { $ReadOnly, $Keys } from "utility-types";












import { dispatchCommand } from "../../Libraries/Renderer/shims/ReactNative";

type Options<T = string> = $ReadOnly<{
  supportedCommands: ReadonlyArray<T>;
}>;

function codegenNativeCommands<T extends {}>(options: Options<$Keys<T>>): T {
  return null as any;
}

export default codegenNativeCommands;
