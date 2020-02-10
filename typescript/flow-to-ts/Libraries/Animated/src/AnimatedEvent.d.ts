import AnimatedValue from './nodes/AnimatedValue';
export declare type Mapping = {
    [key: string]: Mapping;
} | AnimatedValue;
export declare type EventConfig = {
    listener?: ((...args: any) => any) | null | undefined;
    useNativeDriver: boolean;
};
declare function attachNativeEvent(viewRef: any, eventName: string, argMapping: ReadonlyArray<Mapping | null | undefined>): {
    detach: (() => void);
};
declare class AnimatedEvent {
    _argMapping: ReadonlyArray<Mapping | null | undefined>;
    _listeners: Array<((...args: any) => any)>;
    _callListeners: ((...args: any) => any);
    _attachedEvent: {
        detach: (() => void);
    } | null | undefined;
    __isNative: boolean;
    constructor(argMapping: ReadonlyArray<Mapping | null | undefined>, config: EventConfig);
    __addListener(callback: ((...args: any) => any)): void;
    __removeListener(callback: ((...args: any) => any)): void;
    __attach(viewRef: any, eventName: string): void;
    __detach(viewTag: any, eventName: string): void;
    __getHandler(): any | ((...args: any) => void);
    _callListeners(...args: any): void;
}
export { AnimatedEvent, attachNativeEvent };
