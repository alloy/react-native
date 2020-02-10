'use strict';












export type EventSender = ((name: string, params: any) => void);

class InspectorAgent {

  _eventSender: EventSender;

  constructor(eventSender: EventSender) {
    this._eventSender = eventSender;
  }

  sendEvent(name: string, params: any) {
    this._eventSender(name, params);
  }
}

export default InspectorAgent;;
