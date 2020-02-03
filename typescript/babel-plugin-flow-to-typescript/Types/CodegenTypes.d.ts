import { SyntheticEvent } from './CoreEventTypes';
export declare type BubblingEventHandler<T, PaperName extends string | never = never> = (event: SyntheticEvent<T>) => void | Promise<void>;
export declare type DirectEventHandler<T, PaperName extends string | never = never> = (event: SyntheticEvent<T>) => void | Promise<void>;
export declare type Double = number;
export declare type Float = number;
export declare type Int32 = number;
declare type DefaultTypes = number | boolean | string | ReadonlyArray<string>;
export declare type WithDefault<Type extends DefaultTypes, Value extends (Type | undefined | null) | string> = Type | undefined | null;
export {};
