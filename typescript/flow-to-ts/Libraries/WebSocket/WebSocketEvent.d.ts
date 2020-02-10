/**
 * Event object passed to the `onopen`, `onclose`, `onmessage`, `onerror`
 * callbacks of `WebSocket`.
 *
 * The `type` property is "open", "close", "message", "error" respectively.
 *
 * In case of "message", the `data` property contains the incoming data.
 */
declare class WebSocketEvent {
    constructor(type: any, eventInitDict: any);
}
export default WebSocketEvent;
