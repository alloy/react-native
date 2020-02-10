import { Class } from "utility-types";
import { EventSender } from "./InspectorAgent";
interface Agent {
    constructor(eventSender: EventSender): void;
}
declare type AgentClass = Class<Agent> & {
    DOMAIN: string;
};
declare const JSInspector: {
    registerAgent(type: AgentClass): void;
    getTimestamp(): number;
};
export default JSInspector;
