declare const XMLHttpRequest: any;
declare const originalXHROpen: {
    (method: string, url: string): void;
    (method: string, url: string, async: boolean, username?: string, password?: string): void;
};
declare const originalXHRSend: (body?: string | ArrayBuffer | ArrayBufferView | Blob | FormData | URLSearchParams | ReadableStream<Uint8Array> | Document) => void;
declare const originalXHRSetRequestHeader: (name: string, value: string) => void;
declare let openCallback: any;
declare let sendCallback: any;
declare let requestHeaderCallback: any;
declare let headerReceivedCallback: any;
declare let responseCallback: any;
declare let isInterceptorEnabled: boolean;
/**
 * A network interceptor which monkey-patches XMLHttpRequest methods
 * to gather all network requests/responses, in order to show their
 * information in the React Native inspector development tool.
 * This supports interception with XMLHttpRequest API, including Fetch API
 * and any other third party libraries that depend on XMLHttpRequest.
 */
declare const XHRInterceptor: {
    /**
     * Invoked before XMLHttpRequest.open(...) is called.
     */
    setOpenCallback(callback: any): void;
    /**
     * Invoked before XMLHttpRequest.send(...) is called.
     */
    setSendCallback(callback: any): void;
    /**
     * Invoked after xhr's readyState becomes xhr.HEADERS_RECEIVED.
     */
    setHeaderReceivedCallback(callback: any): void;
    /**
     * Invoked after xhr's readyState becomes xhr.DONE.
     */
    setResponseCallback(callback: any): void;
    /**
     * Invoked before XMLHttpRequest.setRequestHeader(...) is called.
     */
    setRequestHeaderCallback(callback: any): void;
    isInterceptorEnabled(): boolean;
    enableInterception(): void;
    disableInterception(): void;
};
