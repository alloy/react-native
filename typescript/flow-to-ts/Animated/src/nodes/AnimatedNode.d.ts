declare const NativeAnimatedHelper: any;
declare const NativeAnimatedAPI: any;
declare const invariant: any;
declare type ValueListenerCallback = (state: {
    value: number;
}) => unknown;
declare let _uniqueId: number;
declare class AnimatedNode {
    _listeners: {
        [key: string]: ValueListenerCallback;
    };
    __nativeAnimatedValueListener: any | null | undefined;
    __attach(): void;
    __detach(): void;
    __getValue(): any;
    __getAnimatedValue(): any;
    __addChild(child: AnimatedNode): void;
    __removeChild(child: AnimatedNode): void;
    __getChildren(): Array<AnimatedNode>;
    __isNative: boolean;
    __nativeTag: number | null | undefined;
    __shouldUpdateListenersForNewNativeTag: boolean;
    constructor();
    __makeNative(): void;
    /**
     * Adds an asynchronous listener to the value so you can observe updates from
     * animations.  This is useful because there is no way to
     * synchronously read the value because it might be driven natively.
     *
     * See http://facebook.github.io/react-native/docs/animatedvalue.html#addlistener
     */
    addListener(callback: (value: any) => unknown): string;
    /**
     * Unregister a listener. The `id` param shall match the identifier
     * previously returned by `addListener()`.
     *
     * See http://facebook.github.io/react-native/docs/animatedvalue.html#removelistener
     */
    removeListener(id: string): void;
    /**
     * Remove all registered listeners.
     *
     * See http://facebook.github.io/react-native/docs/animatedvalue.html#removealllisteners
     */
    removeAllListeners(): void;
    hasListeners(): boolean;
    _startListeningToNativeValueUpdates(): void;
    _onAnimatedValueUpdateReceived(value: number): void;
    __callListeners(value: number): void;
    _stopListeningForNativeValueUpdates(): void;
    __getNativeTag(): number;
    __getNativeConfig(): Object;
    toJSON(): any;
}
