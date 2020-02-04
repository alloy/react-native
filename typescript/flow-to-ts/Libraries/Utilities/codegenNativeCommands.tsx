'use strict';
import { $ReadOnly, $Keys } from "utility-types";












import { dispatchCommand } from "../../Libraries/Renderer/shims/ReactNative";

type Options<T = string> = $ReadOnly<{
  supportedCommands: ReadonlyArray<T>;
}>;

function codegenNativeCommands<T extends {}>(options: Options<$Keys<T>>): T {
  const commandObj = {};

  options.supportedCommands.forEach(command => {
    commandObj[command] = (ref, ...args) => {
      dispatchCommand(ref, command, args);
    };
  });

  return ((commandObj as any) as T);
}

export default codegenNativeCommands;
