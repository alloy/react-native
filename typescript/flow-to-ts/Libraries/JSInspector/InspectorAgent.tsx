yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/JSInspector/InspectorAgent.js
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
Done in 0.46s.
