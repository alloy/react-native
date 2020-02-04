yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/JSInspector/JSInspector.js
'use strict';
import { Class } from "utility-types";












import { EventSender } from "./InspectorAgent";

interface Agent {
  constructor(eventSender: EventSender): void;
}

// Flow doesn't support static declarations in interface
type AgentClass = Class<Agent> & {DOMAIN: string;};

declare function __registerInspectorAgent(type: AgentClass): void;
declare function __inspectorTimestamp(): number;

const JSInspector = {
  registerAgent(type: AgentClass) {
    if (global.__registerInspectorAgent) {
      global.__registerInspectorAgent(type);
    }
  },
  getTimestamp(): number {
    return global.__inspectorTimestamp();
  }
};

module.exports = JSInspector;
Done in 0.47s.
