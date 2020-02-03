export declare type Category = string;
export declare type Message = Readonly<{
    content: string;
    substitutions: ReadonlyArray<Readonly<{
        length: number;
        offset: number;
    }>>;
}>;
