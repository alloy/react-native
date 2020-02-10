import { $Keys } from "utility-types";
export declare type ContentAvailable = 1 | null | void;
export declare type FetchResult = {
    NewData: string;
    NoData: string;
    ResultFailed: string;
};
/**
 * An event emitted by PushNotificationIOS.
 */
export declare type PushNotificationEventName = $Keys<{
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
}>;
/**
 *
 * Handle push notifications for your app, including permission handling and
 * icon badge number.
 *
 * See https://facebook.github.io/react-native/docs/pushnotificationios.html
 */
declare class PushNotificationIOS {
    _data: any;
    _alert: string | any;
    _sound: string;
    _category: string;
    _contentAvailable: ContentAvailable;
    _badgeCount: number;
    _notificationId: string;
    _isRemote: boolean;
    _remoteNotificationCompleteCallbackCalled: boolean;
    _threadID: string;
    static FetchResult: FetchResult;
    /**
     * Schedules the localNotification for immediate presentation.
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#presentlocalnotification
     */
    static presentLocalNotification(details: any): void;
    /**
     * Schedules the localNotification for future presentation.
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#schedulelocalnotification
     */
    static scheduleLocalNotification(details: any): void;
    /**
     * Cancels all scheduled localNotifications.
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#cancelalllocalnotifications
     */
    static cancelAllLocalNotifications(): void;
    /**
     * Remove all delivered notifications from Notification Center.
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#removealldeliverednotifications
     */
    static removeAllDeliveredNotifications(): void;
    /**
     * Provides you with a list of the app’s notifications that are still displayed in Notification Center.
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#getdeliverednotifications
     */
    static getDeliveredNotifications(callback: ((notifications: Array<any>) => void)): void;
    /**
     * Removes the specified notifications from Notification Center
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#removedeliverednotifications
     */
    static removeDeliveredNotifications(identifiers: Array<string>): void;
    /**
     * Sets the badge number for the app icon on the home screen.
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#setapplicationiconbadgenumber
     */
    static setApplicationIconBadgeNumber(number: number): void;
    /**
     * Gets the current badge number for the app icon on the home screen.
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#getapplicationiconbadgenumber
     */
    static getApplicationIconBadgeNumber(callback: ((...args: any) => any)): void;
    /**
     * Cancel local notifications.
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#cancellocalnotification
     */
    static cancelLocalNotifications(userInfo: any): void;
    /**
     * Gets the local notifications that are currently scheduled.
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#getscheduledlocalnotifications
     */
    static getScheduledLocalNotifications(callback: ((...args: any) => any)): void;
    /**
     * Attaches a listener to remote or local notification events while the app
     * is running in the foreground or the background.
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#addeventlistener
     */
    static addEventListener(type: PushNotificationEventName, handler: ((...args: any) => any)): void;
    /**
     * Removes the event listener. Do this in `componentWillUnmount` to prevent
     * memory leaks.
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#removeeventlistener
     */
    static removeEventListener(type: PushNotificationEventName, handler: ((...args: any) => any)): void;
    /**
     * Requests notification permissions from iOS, prompting the user's
     * dialog box. By default, it will request all notification permissions, but
     * a subset of these can be requested by passing a map of requested
     * permissions.
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#requestpermissions
     */
    static requestPermissions(permissions?: {
        alert?: boolean;
        badge?: boolean;
        sound?: boolean;
    }): Promise<{
        alert: boolean;
        badge: boolean;
        sound: boolean;
    }>;
    /**
     * Unregister for all remote notifications received via Apple Push Notification service.
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#abandonpermissions
     */
    static abandonPermissions(): void;
    /**
     * See what push permissions are currently enabled. `callback` will be
     * invoked with a `permissions` object.
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#checkpermissions
     */
    static checkPermissions(callback: ((...args: any) => any)): void;
    /**
     * This method returns a promise that resolves to either the notification
     * object if the app was launched by a push notification, or `null` otherwise.
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#getinitialnotification
     */
    static getInitialNotification(): Promise<PushNotificationIOS | null | undefined>;
    /**
     * You will never need to instantiate `PushNotificationIOS` yourself.
     * Listening to the `notification` event and invoking
     * `getInitialNotification` is sufficient
     *
     */
    constructor(nativeNotif: any);
    /**
     * This method is available for remote notifications that have been received via:
     * `application:didReceiveRemoteNotification:fetchCompletionHandler:`
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#finish
     */
    finish(fetchResult: string): void;
    /**
     * An alias for `getAlert` to get the notification's main message string
     */
    getMessage(): (string | null | undefined) | (any | null | undefined);
    /**
     * Gets the sound string from the `aps` object
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#getsound
     */
    getSound(): string | null | undefined;
    /**
     * Gets the category string from the `aps` object
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#getcategory
     */
    getCategory(): string | null | undefined;
    /**
     * Gets the notification's main message from the `aps` object
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#getalert
     */
    getAlert(): (string | null | undefined) | (any | null | undefined);
    /**
     * Gets the content-available number from the `aps` object
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#getcontentavailable
     */
    getContentAvailable(): ContentAvailable;
    /**
     * Gets the badge count number from the `aps` object
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#getbadgecount
     */
    getBadgeCount(): number | null | undefined;
    /**
     * Gets the data object on the notif
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#getdata
     */
    getData(): any | null | undefined;
    /**
     * Gets the thread ID on the notif
     *
     * See https://facebook.github.io/react-native/docs/pushnotificationios.html#getthreadid
     */
    getThreadID(): string | null | undefined;
}
export default PushNotificationIOS;
