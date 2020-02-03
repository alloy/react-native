declare type Timespan = {
    description?: string;
    totalTime?: number;
    startTime?: number;
    endTime?: number;
};
export declare type IPerformanceLogger = {
    addTimespan(c: string, b: number, a: string | void): void;
    startTimespan(b: string, a: string | void): void;
    stopTimespan(a: string): void;
    clear(): void;
    clearCompleted(): void;
    clearExceptTimespans(a: Array<string>): void;
    currentTimestamp(): number;
    getTimespans(): {
        [key: string]: Timespan;
    };
    hasTimespan(a: string): boolean;
    logTimespans(): void;
    addTimespans(b: Array<number>, a: Array<string>): void;
    setExtra(b: string, a: any): void;
    getExtras(): {
        [key: string]: any;
    };
    removeExtra(a: string): any | undefined | null;
    logExtras(): void;
    markPoint(b: string, a: number | void): void;
    getPoints(): {
        [key: string]: number;
    };
    logPoints(): void;
    logEverything(): void;
};
export {};
