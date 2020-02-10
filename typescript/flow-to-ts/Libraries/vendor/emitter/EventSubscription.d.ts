import EventSubscriptionVendor from "./EventSubscriptionVendor";
/**
 * EventSubscription represents a subscription to a particular event. It can
 * remove its own subscription.
 */
declare class EventSubscription {
    eventType: string;
    key: number;
    subscriber: EventSubscriptionVendor;
    /**
     * @param {EventSubscriptionVendor} subscriber the subscriber that controls
     *   this subscription.
     */
    constructor(subscriber: EventSubscriptionVendor);
    /**
     * Removes this subscription from the subscriber that controls it.
     */
    remove(): void;
}
export default EventSubscription;
