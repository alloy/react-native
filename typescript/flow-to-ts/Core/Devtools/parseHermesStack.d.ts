declare type HermesStackLocationNative = {
    readonly type: "NATIVE";
};
declare type HermesStackLocationSource = {
    readonly type: "SOURCE";
    readonly sourceUrl: string;
    readonly line1Based: number;
    readonly column1Based: number;
};
declare type HermesStackLocationBytecode = {
    readonly type: "BYTECODE";
    readonly sourceUrl: string;
    readonly line1Based: number;
    readonly virtualOffset0Based: number;
};
declare type HermesStackLocation = HermesStackLocationNative | HermesStackLocationSource | HermesStackLocationBytecode;
declare type HermesStackEntryFrame = {
    readonly type: "FRAME";
    readonly location: HermesStackLocation;
    readonly functionName: string;
};
declare type HermesStackEntrySkipped = {
    readonly type: "SKIPPED";
    readonly count: number;
};
declare type HermesStackEntry = HermesStackEntryFrame | HermesStackEntrySkipped;
export declare type HermesParsedStack = {
    readonly message: string;
    readonly entries: ReadonlyArray<HermesStackEntry>;
};
export {};
