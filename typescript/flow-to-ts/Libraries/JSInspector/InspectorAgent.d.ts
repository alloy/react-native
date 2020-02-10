export declare type EventSender = ((name: string, params: any) => void);
declare class InspectorAgent {
    _eventSender: EventSender;
    constructor(eventSender: EventSender);
    sendEvent(name: string, params: any): void;
}
export default InspectorAgent;
