export declare type KeyboardEventName = "keyboardWillShow" | "keyboardDidShow" | "keyboardWillHide" | "keyboardDidHide" | "keyboardWillChangeFrame" | "keyboardDidChangeFrame";
export declare type KeyboardEventEasing = "easeIn" | "easeInEaseOut" | "easeOut" | "linear" | "keyboard";
export declare type KeyboardEventCoordinates = Readonly<{
    screenX: number;
    screenY: number;
    width: number;
    height: number;
}>;
export declare type KeyboardEvent = AndroidKeyboardEvent | IOSKeyboardEvent;
declare type BaseKeyboardEvent = {
    duration: number;
    easing: KeyboardEventEasing;
    endCoordinates: KeyboardEventCoordinates;
};
export declare type AndroidKeyboardEvent = Readonly<{
    duration: 0;
    easing: "keyboard";
} & BaseKeyboardEvent>;
export declare type IOSKeyboardEvent = Readonly<{
    startCoordinates: KeyboardEventCoordinates;
    isEventFromThisApp: boolean;
} & BaseKeyboardEvent>;
export {};
