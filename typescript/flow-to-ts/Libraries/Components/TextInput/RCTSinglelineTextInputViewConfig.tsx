'use strict';;
import _Import0 from '../../Utilities/differ/sizesDiffer';
import _Import1 from '../../StyleSheet/processColor';
import _Import2 from '../../StyleSheet/processColor';
import _Import3 from '../../StyleSheet/processColor';
import _Import4 from '../../StyleSheet/processColor';
import _Import5 from '../../StyleSheet/processColor';












import ReactNativeViewViewConfig from "../../Components/View/ReactNativeViewViewConfig";
import { ReactNativeBaseComponentViewConfig } from "../../Renderer/shims/ReactNativeTypes";

const RCTSinglelineTextInputViewConfig = {
  uiViewClassName: 'RCTSinglelineTextInputView',
  bubblingEventTypes: {
    topBlur: {
      phasedRegistrationNames: {
        bubbled: 'onBlur',
        captured: 'onBlurCapture'
      }
    },
    topChange: {
      phasedRegistrationNames: {
        bubbled: 'onChange',
        captured: 'onChangeCapture'
      }
    },
    topEndEditing: {
      phasedRegistrationNames: {
        bubbled: 'onEndEditing',
        captured: 'onEndEditingCapture'
      }
    },
    topFocus: {
      phasedRegistrationNames: {
        bubbled: 'onFocus',
        captured: 'onFocusCapture'
      }
    },
    topKeyPress: {
      phasedRegistrationNames: {
        bubbled: 'onKeyPress',
        captured: 'onKeyPressCapture'
      }
    },
    topSubmitEditing: {
      phasedRegistrationNames: {
        bubbled: 'onSubmitEditing',
        captured: 'onSubmitEditingCapture'
      }
    },
    topTouchCancel: {
      phasedRegistrationNames: {
        bubbled: 'onTouchCancel',
        captured: 'onTouchCancelCapture'
      }
    },
    topTouchEnd: {
      phasedRegistrationNames: {
        bubbled: 'onTouchEnd',
        captured: 'onTouchEndCapture'
      }
    },

    topTouchMove: {
      phasedRegistrationNames: {
        bubbled: 'onTouchMove',
        captured: 'onTouchMoveCapture'
      }
    }
  },
  directEventTypes: {},
  validAttributes: {
    ...ReactNativeViewViewConfig.validAttributes,
    fontSize: true,
    fontWeight: true,
    fontVariant: true,
    // flowlint-next-line untyped-import:off
    textShadowOffset: { diff: _Import0 },
    allowFontScaling: true,
    fontStyle: true,
    textTransform: true,
    textAlign: true,
    fontFamily: true,
    lineHeight: true,
    isHighlighted: true,
    writingDirection: true,
    textDecorationLine: true,
    textShadowRadius: true,
    letterSpacing: true,
    textDecorationStyle: true,
    textDecorationColor: { process: _Import1 },
    color: { process: _Import2 },
    maxFontSizeMultiplier: true,
    textShadowColor: { process: _Import3 },
    editable: true,
    inputAccessoryViewID: true,
    caretHidden: true,
    enablesReturnKeyAutomatically: true,
    placeholderTextColor: { process: _Import4 },
    onSelectionChange: true,
    clearButtonMode: true,
    onContentSizeChange: true,
    keyboardType: true,
    selection: true,
    returnKeyType: true,
    blurOnSubmit: true,
    mostRecentEventCount: true,
    onChange: true,
    scrollEnabled: true,
    selectionColor: { process: _Import5 },
    contextMenuHidden: true,
    secureTextEntry: true,
    onTextInput: true,
    placeholder: true,
    autoCorrect: true,
    onScroll: true,
    multiline: true,
    textContentType: true,
    maxLength: true,
    autoCapitalize: true,
    keyboardAppearance: true,
    passwordRules: true,
    spellCheck: true,
    selectTextOnFocus: true,
    text: true,
    clearTextOnFocus: true
  }
};

export default RCTSinglelineTextInputViewConfig as ReactNativeBaseComponentViewConfig<>;;
