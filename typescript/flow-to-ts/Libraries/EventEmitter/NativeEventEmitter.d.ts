import EventEmitter from '../vendor/emitter/EventEmitter';
import EmitterSubscription from "../vendor/emitter/EmitterSubscription";
declare type NativeModule = {
    readonly addListener: ((eventType: string) => void);
    readonly removeListeners: ((count: number) => void);
};
/**
 * Abstract base class for implementing event-emitting modules. This implements
 * a subset of the standard EventEmitter node module API.
 */
declare class NativeEventEmitter extends EventEmitter {
    _nativeModule: NativeModule | null | undefined;
    constructor(nativeModule: NativeModule | null | undefined);
    addListener(eventType: string, listener: ((...args: any) => any), context: any | null | undefined): EmitterSubscription;
    removeAllListeners(eventType: string): void;
    removeSubscription(subscription: EmitterSubscription): void;
}
export default NativeEventEmitter;
