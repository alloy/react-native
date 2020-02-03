import { $ReadOnly, $Keys } from "utility-types";
declare type Options<T = string> = $ReadOnly<{
    supportedCommands: ReadonlyArray<T>;
}>;
declare function codegenNativeCommands<T extends {}>(options: Options<$Keys<T>>): T;
export default codegenNativeCommands;
