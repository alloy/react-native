'use strict';;
import _Import0 from '../../StyleSheet/processColor';
import _Import1 from '../../StyleSheet/processColor';
import _Import2 from '../../StyleSheet/processColor';
import _Import3 from '../../StyleSheet/processColor';
import _Import4 from '../../StyleSheet/processColor';












import ReactNativeViewViewConfig from "../../Components/View/ReactNativeViewViewConfig";
import { ReactNativeBaseComponentViewConfig } from "../../Renderer/shims/ReactNativeTypes";

const AndroidTextInputViewConfig = {
  uiViewClassName: 'AndroidTextInput',
  bubblingEventTypes: {
    topTextInput: {
      phasedRegistrationNames: {
        bubbled: 'onTextInput',
        captured: 'onTextInputCapture'
      }
    }
  },
  directEventTypes: {},
  validAttributes: {
    ...ReactNativeViewViewConfig.validAttributes,

    maxFontSizeMultiplier: true,
    placeholder: true,
    inlineImagePadding: true,
    contextMenuHidden: true,
    textShadowColor: { process: _Import0 },
    maxLength: true,
    selectTextOnFocus: true,
    textShadowRadius: true,
    underlineColorAndroid: { process: _Import1 },
    textDecorationLine: true,
    blurOnSubmit: true,
    textAlignVertical: true,
    fontStyle: true,
    textShadowOffset: true,
    selectionColor: { process: _Import2 },
    selection: true,
    placeholderTextColor: { process: _Import3 },
    importantForAutofill: true,
    lineHeight: true,
    textTransform: true,
    returnKeyType: true,
    keyboardType: true,
    multiline: true,
    color: true,
    autoCompleteType: true,
    numberOfLines: true,
    letterSpacing: true,
    returnKeyLabel: true,
    fontSize: true,
    onKeyPress: true,
    cursorColor: { process: _Import4 },
    text: true,
    showSoftInputOnFocus: true,
    textAlign: true,
    autoCapitalize: true,
    autoCorrect: true,
    caretHidden: true,
    secureTextEntry: true,
    textBreakStrategy: true,
    onScroll: true,
    onContentSizeChange: true,
    disableFullscreenUI: true,
    includeFontPadding: true,
    fontWeight: true,
    fontFamily: true,
    allowFontScaling: true,
    onSelectionChange: true,
    mostRecentEventCount: true,
    inlineImageLeft: true,
    editable: true,
    fontVariant: true
  }
};

export default AndroidTextInputViewConfig as ReactNativeBaseComponentViewConfig<>;;
