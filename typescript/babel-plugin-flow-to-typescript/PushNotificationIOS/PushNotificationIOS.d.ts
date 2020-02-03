export declare type ContentAvailable = 1 | null | void;
export declare type FetchResult = {
    NewData: string;
    NoData: string;
    ResultFailed: string;
};
/**
 * An event emitted by PushNotificationIOS.
 */
export declare type PushNotificationEventName = keyof {
    /**
     * Fired when a remote notification is received. The handler will be invoked
     * with an instance of `PushNotificationIOS`.
     */
    notification: string;
    /**
     * Fired when a local notification is received. The handler will be invoked
     * with an instance of `PushNotificationIOS`.
     */
    localNotification: string;
    /**
     * Fired when the user registers for remote notifications. The handler will be
     * invoked with a hex string representing the deviceToken.
     */
    register: string;
    /**
     * Fired when the user fails to register for remote notifications. Typically
     * occurs when APNS is having issues, or the device is a simulator. The
     * handler will be invoked with {message: string, code: number, details: any}.
     */
    registrationError: string;
};
