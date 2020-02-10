export declare type ModuleConfig = [string, any | null | undefined, ReadonlyArray<string> | null | undefined, ReadonlyArray<number> | null | undefined, ReadonlyArray<number> | null | undefined];
export declare type MethodType = "async" | "promise" | "sync";
declare let NativeModules: {
    [moduleName: string]: any;
};
export default NativeModules;
