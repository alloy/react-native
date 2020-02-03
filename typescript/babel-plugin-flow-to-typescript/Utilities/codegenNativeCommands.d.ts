declare type Options<T = string> = Readonly<{
    supportedCommands: ReadonlyArray<T>;
}>;
declare function codegenNativeCommands<T extends {}>(options: Options<keyof T>): T;
export default codegenNativeCommands;
