import EventSubscription from "./EventSubscription";
/**
 * EventSubscriptionVendor stores a set of EventSubscriptions that are
 * subscribed to a particular event type.
 */
declare class EventSubscriptionVendor {
    _subscriptionsForType: any;
    _currentSubscription: EventSubscription | null | undefined;
    constructor();
    /**
     * Adds a subscription keyed by an event type.
     *
     * @param {string} eventType
     * @param {EventSubscription} subscription
     */
    addSubscription(eventType: string, subscription: EventSubscription): EventSubscription;
    /**
     * Removes a bulk set of the subscriptions.
     *
     * @param {?string} eventType - Optional name of the event type whose
     *   registered supscriptions to remove, if null remove all subscriptions.
     */
    removeAllSubscriptions(eventType: string | null | undefined): void;
    /**
     * Removes a specific subscription. Instead of calling this function, call
     * `subscription.remove()` directly.
     *
     * @param {object} subscription
     */
    removeSubscription(subscription: any): void;
    /**
     * Returns the array of subscriptions that are currently registered for the
     * given event type.
     *
     * Note: This array can be potentially sparse as subscriptions are deleted
     * from it when they are removed.
     *
     * TODO: This returns a nullable array. wat?
     *
     * @param {string} eventType
     * @returns {?array}
     */
    getSubscriptionsForType(eventType: string): [EventSubscription] | null | undefined;
}
export default EventSubscriptionVendor;
