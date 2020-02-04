yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/codegenNativeCommands.js
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
Done in 0.49s.
