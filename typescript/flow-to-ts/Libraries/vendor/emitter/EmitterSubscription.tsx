'use strict';;
import EventSubscription from './EventSubscription';

import EventEmitter from "./EventEmitter";
import EventSubscriptionVendor from "./EventSubscriptionVendor";

/**
 * EmitterSubscription represents a subscription with listener and context data.
 */
class EmitterSubscription extends EventSubscription {

  emitter: EventEmitter;
  listener: Function;
  context: Object | null | undefined;

  /**
   * @param {EventEmitter} emitter - The event emitter that registered this
   *   subscription
   * @param {EventSubscriptionVendor} subscriber - The subscriber that controls
   *   this subscription
   * @param {function} listener - Function to invoke when the specified event is
   *   emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */
  constructor(emitter: EventEmitter, subscriber: EventSubscriptionVendor, listener: Function, context: Object | null | undefined) {
    super(subscriber);
    this.emitter = emitter;
    this.listener = listener;
    this.context = context;
  }

  /**
   * Removes this subscription from the emitter that registered it.
   * Note: we're overriding the `remove()` method of EventSubscription here
   * but deliberately not calling `super.remove()` as the responsibility
   * for removing the subscription lies with the EventEmitter.
   */
  remove() {
    this.emitter.removeSubscription(this);
  }
}

export default EmitterSubscription;
