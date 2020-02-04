yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/TextInput/RCTSinglelineTextInputViewConfig.js
'use strict';












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
    textShadowOffset: { diff: require('../../Utilities/differ/sizesDiffer') },
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
    textDecorationColor: { process: require('../../StyleSheet/processColor') },
    color: { process: require('../../StyleSheet/processColor') },
    maxFontSizeMultiplier: true,
    textShadowColor: { process: require('../../StyleSheet/processColor') },
    editable: true,
    inputAccessoryViewID: true,
    caretHidden: true,
    enablesReturnKeyAutomatically: true,
    placeholderTextColor: { process: require('../../StyleSheet/processColor') },
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
    selectionColor: { process: require('../../StyleSheet/processColor') },
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

module.exports = (RCTSinglelineTextInputViewConfig as ReactNativeBaseComponentViewConfig<>);
Done in 0.53s.
