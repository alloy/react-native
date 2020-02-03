export declare type AlertType = "default" | "plain-text" | "secure-text" | "login-password";
export declare type AlertButtonStyle = "default" | "cancel" | "destructive";
export declare type Buttons = Array<{
    text?: string;
    onPress?: Function | null | undefined;
    style?: AlertButtonStyle;
}>;
