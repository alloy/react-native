declare const Platform: any;
declare const UIManager: any;
declare let currentlyFocusedID: number | null | undefined;
declare const inputs: any;
/**
 * Returns the ID of the currently focused text field, if one exists
 * If no text field is focused it returns null
 */
declare function currentlyFocusedField(): number | null | undefined;
declare function focusField(textFieldID: number | null | undefined): void;
declare function blurField(textFieldID: number | null | undefined): void;
/**
 * @param {number} TextInputID id of the text field to focus
 * Focuses the specified text field
 * noop if the text field was already focused
 */
declare function focusTextInput(textFieldID: number | null | undefined): void;
/**
 * @param {number} textFieldID id of the text field to unfocus
 * Unfocuses the specified text field
 * noop if it wasn't focused
 */
declare function blurTextInput(textFieldID: number | null | undefined): void;
declare function registerInput(textFieldID: number): void;
declare function unregisterInput(textFieldID: number): void;
declare function isTextInput(textFieldID: number): boolean;
