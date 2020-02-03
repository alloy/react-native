declare type SimpleTask = {
    name: string;
    run: () => void;
};
declare type PromiseTask = {
    name: string;
    gen: () => Promise<any>;
};
export declare type Task = Function | SimpleTask | PromiseTask;
export {};
