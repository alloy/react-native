export declare type AlertType = "default" | "plain-text" | "secure-text" | "login-password";
export declare type AlertButtonStyle = "default" | "cancel" | "destructive";
export declare type Buttons = Array<{
    text?: string;
    onPress?: ((...args: any) => any) | null | undefined;
    style?: AlertButtonStyle;
}>;
declare type Options = {
    cancelable?: boolean | null | undefined;
    onDismiss?: (() => void) | null | undefined;
};
/**
 * Launches an alert dialog with the specified title and message.
 *
 * See http://facebook.github.io/react-native/docs/alert.html
 */
declare class Alert {
    static alert(title: string | null | undefined, message?: string | null | undefined, buttons?: Buttons, options?: Options): void;
    static prompt(title: string | null | undefined, message?: string | null | undefined, callbackOrButtons?: (((text: string) => void) | Buttons) | null | undefined, type?: AlertType | null | undefined, defaultValue?: string, keyboardType?: string): void;
}
export default Alert;
