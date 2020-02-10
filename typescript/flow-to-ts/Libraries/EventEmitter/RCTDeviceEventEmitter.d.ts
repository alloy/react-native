import EventEmitter from '../vendor/emitter/EventEmitter';
import EventSubscriptionVendor from '../vendor/emitter/EventSubscriptionVendor';
import EmitterSubscription from "../vendor/emitter/EmitterSubscription";
/**
 * Deprecated - subclass NativeEventEmitter to create granular event modules instead of
 * adding all event listeners directly to RCTDeviceEventEmitter.
 */
declare class RCTDeviceEventEmitter extends EventEmitter {
    sharedSubscriber: EventSubscriptionVendor;
    constructor();
    addListener(eventType: string, listener: ((...args: any) => any), context: any | null | undefined): EmitterSubscription;
    removeAllListeners(eventType: string | null | undefined): void;
    removeSubscription(subscription: EmitterSubscription): void;
}
declare const _default: RCTDeviceEventEmitter;
export default _default;
