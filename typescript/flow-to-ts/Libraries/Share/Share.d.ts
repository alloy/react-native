declare type Content = {
    title?: string;
    message: string;
} | {
    title?: string;
    url: string;
};
declare type Options = {
    dialogTitle?: string;
    excludedActivityTypes?: Array<string>;
    tintColor?: string;
    subject?: string;
};
declare class Share {
    /**
     * Open a dialog to share text content.
     *
     * In iOS, Returns a Promise which will be invoked an object containing `action`, `activityType`.
     * If the user dismissed the dialog, the Promise will still be resolved with action being `Share.dismissedAction`
     * and all the other keys being undefined.
     *
     * In Android, Returns a Promise which always be resolved with action being `Share.sharedAction`.
     *
     * ### Content
     *
     *  - `message` - a message to share
     *
     * #### iOS
     *
     *  - `url` - an URL to share
     *
     * At least one of URL and message is required.
     *
     * #### Android
     *
     * - `title` - title of the message
     *
     * ### Options
     *
     * #### iOS
     *
     *  - `subject` - a subject to share via email
     *  - `excludedActivityTypes`
     *  - `tintColor`
     *
     * #### Android
     *
     *  - `dialogTitle`
     *
     */
    static share(content: Content, options?: Options): Promise<any>;
    /**
     * The content was successfully shared.
     */
    static sharedAction: "sharedAction";
    /**
     * The dialog has been dismissed.
     * @platform ios
     */
    static dismissedAction: "dismissedAction";
}
export default Share;
