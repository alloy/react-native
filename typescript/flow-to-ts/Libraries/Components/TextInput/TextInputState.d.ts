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
declare const _default: {
    currentlyFocusedField: typeof currentlyFocusedField;
    focusField: typeof focusField;
    blurField: typeof blurField;
    focusTextInput: typeof focusTextInput;
    blurTextInput: typeof blurTextInput;
    registerInput: typeof registerInput;
    unregisterInput: typeof unregisterInput;
    isTextInput: typeof isTextInput;
};
export default _default;
