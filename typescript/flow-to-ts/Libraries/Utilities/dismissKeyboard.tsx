'use strict';;
import TextInputState from '../Components/TextInput/TextInputState';

function dismissKeyboard() {
  TextInputState.blurTextInput(TextInputState.currentlyFocusedField());
}

export default dismissKeyboard;;
