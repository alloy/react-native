/**
 * A network interceptor which monkey-patches RCTWebSocketModule methods
 * to gather all websocket network requests/responses, in order to show
 * their information in the React Native inspector development tool.
 */
declare const WebSocketInterceptor: {
    /**
     * Invoked when RCTWebSocketModule.close(...) is called.
     */
    setCloseCallback(callback: any): void;
    /**
     * Invoked when RCTWebSocketModule.send(...) or sendBinary(...) is called.
     */
    setSendCallback(callback: any): void;
    /**
     * Invoked when RCTWebSocketModule.connect(...) is called.
     */
    setConnectCallback(callback: any): void;
    /**
     * Invoked when event "websocketOpen" happens.
     */
    setOnOpenCallback(callback: any): void;
    /**
     * Invoked when event "websocketMessage" happens.
     */
    setOnMessageCallback(callback: any): void;
    /**
     * Invoked when event "websocketFailed" happens.
     */
    setOnErrorCallback(callback: any): void;
    /**
     * Invoked when event "websocketClosed" happens.
     */
    setOnCloseCallback(callback: any): void;
    isInterceptorEnabled(): boolean;
    _unregisterEvents(): void;
    /**
     * Add listeners to the RCTWebSocketModule events to intercept them.
     */
    _registerEvents(): void;
    enableInterception(): void;
    _arrayBufferToString(data: any): any;
    disableInterception(): void;
};
export default WebSocketInterceptor;
