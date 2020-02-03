'use strict';












export type EventSender = (name: string, params: Object) => void;

class InspectorAgent {

  _eventSender: EventSender;

  constructor(eventSender: EventSender) {
    this._eventSender = eventSender;
  }

  sendEvent(name: string, params: Object) {
    this._eventSender(name, params);
  }
}

module.exports = InspectorAgent;