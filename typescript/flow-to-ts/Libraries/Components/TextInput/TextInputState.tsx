'use strict';
















const Platform = require('../../Utilities/Platform');
const UIManager = require('../../ReactNative/UIManager');

let currentlyFocusedID: number | null | undefined = null;
const inputs = new Set();

/**
 * Returns the ID of the currently focused text field, if one exists
 * If no text field is focused it returns null
 */
function currentlyFocusedField(): number | null | undefined {
  return currentlyFocusedID;
}

function focusField(textFieldID: number | null | undefined): void {
  if (currentlyFocusedID !== textFieldID && textFieldID != null) {
    currentlyFocusedID = textFieldID;
  }
}

function blurField(textFieldID: number | null | undefined) {
  if (currentlyFocusedID === textFieldID && textFieldID != null) {
    currentlyFocusedID = null;
  }
}

/**
 * @param {number} TextInputID id of the text field to focus
 * Focuses the specified text field
 * noop if the text field was already focused
 */
function focusTextInput(textFieldID: number | null | undefined) {
  if (currentlyFocusedID !== textFieldID && textFieldID != null) {
    focusField(textFieldID);
    if (Platform.OS === 'ios') {
      UIManager.focus(textFieldID);
    } else if (Platform.OS === 'android') {
      UIManager.dispatchViewManagerCommand(textFieldID, UIManager.getViewManagerConfig('AndroidTextInput').Commands.focusTextInput, null);
    }
  }
}

/**
 * @param {number} textFieldID id of the text field to unfocus
 * Unfocuses the specified text field
 * noop if it wasn't focused
 */
function blurTextInput(textFieldID: number | null | undefined) {
  if (currentlyFocusedID === textFieldID && textFieldID != null) {
    blurField(textFieldID);
    if (Platform.OS === 'ios') {
      UIManager.blur(textFieldID);
    } else if (Platform.OS === 'android') {
      UIManager.dispatchViewManagerCommand(textFieldID, UIManager.getViewManagerConfig('AndroidTextInput').Commands.blurTextInput, null);
    }
  }
}

function registerInput(textFieldID: number) {
  inputs.add(textFieldID);
}

function unregisterInput(textFieldID: number) {
  inputs.delete(textFieldID);
}

function isTextInput(textFieldID: number): boolean {
  return inputs.has(textFieldID);
}

module.exports = {
  currentlyFocusedField,
  focusField,
  blurField,
  focusTextInput,
  blurTextInput,
  registerInput,
  unregisterInput,
  isTextInput
};
