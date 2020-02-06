'use strict';;
const TextInputState = require('../Components/TextInput/TextInputState');

function dismissKeyboard() {
  TextInputState.blurTextInput(TextInputState.currentlyFocusedField());
}

export default dismissKeyboard;
