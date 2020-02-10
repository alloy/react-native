'use strict';;
import _Import0 from '../../StyleSheet/processColor';
import _Import1 from '../../StyleSheet/processColor';
import _Import2 from '../../StyleSheet/processColor';
import _Import3 from '../../StyleSheet/processColor';
import _Import4 from '../../StyleSheet/processColor';
import _Import5 from '../../StyleSheet/processColor';
import _Import6 from '../../StyleSheet/processColor';
import _Import7 from '../../StyleSheet/processColor';
import _Import8 from '../../Utilities/differ/insetsDiffer';
import _Import9 from '../../StyleSheet/processColor';
import _Import10 from '../../Utilities/differ/sizesDiffer';
import _Import11 from '../../StyleSheet/processColor';
import _Import12 from '../../StyleSheet/processColor';
import _Import13 from '../../StyleSheet/processColor';
import _Import14 from '../../StyleSheet/processColor';
import _Import15 from '../../StyleSheet/processColor';
import _Import16 from '../../StyleSheet/processColor';
import _Import17 from '../../StyleSheet/processColor';
import _Import18 from '../../StyleSheet/processColor';
import _Import19 from '../../StyleSheet/processColor';
import _Import20 from '../../StyleSheet/processColor';
import _Import21 from '../../StyleSheet/processColor';
import _Import22 from '../../Utilities/differ/sizesDiffer';
import _Import23 from '../../StyleSheet/processColor';
import _Import24 from '../../StyleSheet/processColor';
import _Import25 from '../../StyleSheet/processColor';
import _Import26 from '../../Utilities/differ/matricesDiffer';
import _Import27 from '../../StyleSheet/processTransform';
import _Import28 from '../../Utilities/differ/matricesDiffer';
import _Import29 from '../../StyleSheet/processTransform';











import ReactNativeViewViewConfigAndroid from "./ReactNativeViewViewConfigAndroid";
import { Platform } from "react-native";

const ReactNativeViewConfig = {
  uiViewClassName: 'RCTView',
  baseModuleName: null,
  Manager: 'ViewManager',
  Commands: ({} as {}),
  Constants: ({} as {}),
  bubblingEventTypes: {
    ...ReactNativeViewViewConfigAndroid.bubblingEventTypes,
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
    topPress: {
      phasedRegistrationNames: {
        bubbled: 'onPress',
        captured: 'onPressCapture'
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
    },
    topTouchStart: {
      phasedRegistrationNames: {
        bubbled: 'onTouchStart',
        captured: 'onTouchStartCapture'
      }
    }
  },
  directEventTypes: {
    ...ReactNativeViewViewConfigAndroid.directEventTypes,
    topAccessibilityAction: {
      registrationName: 'onAccessibilityAction'
    },
    topAccessibilityEscape: {
      registrationName: 'onAccessibilityEscape'
    },
    topAccessibilityTap: {
      registrationName: 'onAccessibilityTap'
    },
    topLayout: {
      registrationName: 'onLayout'
    },
    topMagicTap: {
      registrationName: 'onMagicTap'
    },
    // Events for react-native-gesture-handler (T45765076)
    // Remove once this library can handle JS View Configs
    onGestureHandlerEvent: {
      registrationName: 'onGestureHandlerEvent'
    },
    onGestureHandlerStateChange: {
      registrationName: 'onGestureHandlerStateChange'
    }
  },
  validAttributes: {
    ...ReactNativeViewViewConfigAndroid.validAttributes,
    accessibilityActions: true,
    accessibilityElementsHidden: true,
    accessibilityHint: true,
    accessibilityIgnoresInvertColors: true,
    accessibilityLabel: true,
    accessibilityLiveRegion: true,
    accessibilityRole: true,
    accessibilityStates: true, // TODO: Can be removed after next release
    accessibilityState: true,
    accessibilityValue: true,
    accessibilityViewIsModal: true,
    accessible: true,
    alignContent: true,
    alignItems: true,
    alignSelf: true,
    aspectRatio: true,
    backfaceVisibility: true,
    backgroundColor: { process: _Import0 },
    borderBottomColor: { process: _Import1 },
    borderBottomEndRadius: true,
    borderBottomLeftRadius: true,
    borderBottomRightRadius: true,
    borderBottomStartRadius: true,
    borderBottomWidth: true,
    borderColor: { process: _Import2 },
    borderEndColor: { process: _Import3 },
    borderEndWidth: true,
    borderLeftColor: { process: _Import4 },
    borderLeftWidth: true,
    borderRadius: true,
    borderRightColor: { process: _Import5 },
    borderRightWidth: true,
    borderStartColor: { process: _Import6 },
    borderStartWidth: true,
    borderStyle: true,
    borderTopColor: { process: _Import7 },
    borderTopEndRadius: true,
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderTopStartRadius: true,
    borderTopWidth: true,
    borderWidth: true,
    bottom: true,
    clickable: true,
    collapsable: true,
    direction: true,
    display: true,
    elevation: true,
    end: true,
    flex: true,
    flexBasis: true,
    flexDirection: true,
    flexGrow: true,
    flexShrink: true,
    flexWrap: true,
    height: true,
    hitSlop: { diff: (_Import8 as any) },
    importantForAccessibility: true,
    justifyContent: true,
    left: true,
    margin: true,
    marginBottom: true,
    marginEnd: true,
    marginHorizontal: true,
    marginLeft: true,
    marginRight: true,
    marginStart: true,
    marginTop: true,
    marginVertical: true,
    maxHeight: true,
    maxWidth: true,
    minHeight: true,
    minWidth: true,
    nativeID: true,
    needsOffscreenAlphaCompositing: true,
    onAccessibilityAction: true,
    onAccessibilityEscape: true,
    onAccessibilityTap: true,
    onLayout: true,
    onMagicTap: true,
    opacity: true,
    overflow: true,
    padding: true,
    paddingBottom: true,
    paddingEnd: true,
    paddingHorizontal: true,
    paddingLeft: true,
    paddingRight: true,
    paddingStart: true,
    paddingTop: true,
    paddingVertical: true,
    pointerEvents: true,
    position: true,
    removeClippedSubviews: true,
    renderToHardwareTextureAndroid: true,
    right: true,
    rotation: true,
    scaleX: true,
    scaleY: true,
    shadowColor: { process: _Import9 },
    shadowOffset: { diff: _Import10 },
    shadowOpacity: true,
    shadowRadius: true,
    shouldRasterizeIOS: true,
    start: true,
    style: {
      alignContent: true,
      alignItems: true,
      alignSelf: true,
      aspectRatio: true,
      backfaceVisibility: true,
      backgroundColor: { process: _Import11 },
      borderBottomColor: { process: _Import12 },
      borderBottomEndRadius: true,
      borderBottomLeftRadius: true,
      borderBottomRightRadius: true,
      borderBottomStartRadius: true,
      borderBottomWidth: true,
      borderColor: { process: _Import13 },
      borderEndColor: { process: _Import14 },
      borderEndWidth: true,
      borderLeftColor: { process: _Import15 },
      borderLeftWidth: true,
      borderRadius: true,
      borderRightColor: { process: _Import16 },
      borderRightWidth: true,
      borderStartColor: { process: _Import17 },
      borderStartWidth: true,
      borderStyle: true,
      borderTopColor: { process: _Import18 },
      borderTopEndRadius: true,
      borderTopLeftRadius: true,
      borderTopRightRadius: true,
      borderTopStartRadius: true,
      borderTopWidth: true,
      borderWidth: true,
      bottom: true,
      color: { process: _Import19 },
      decomposedMatrix: true,
      direction: true,
      display: true,
      elevation: true,
      end: true,
      flex: true,
      flexBasis: true,
      flexDirection: true,
      flexGrow: true,
      flexShrink: true,
      flexWrap: true,
      fontFamily: true,
      fontSize: true,
      fontStyle: true,
      fontVariant: true,
      fontWeight: true,
      height: true,
      includeFontPadding: true,
      justifyContent: true,
      left: true,
      letterSpacing: true,
      lineHeight: true,
      margin: true,
      marginBottom: true,
      marginEnd: true,
      marginHorizontal: true,
      marginLeft: true,
      marginRight: true,
      marginStart: true,
      marginTop: true,
      marginVertical: true,
      maxHeight: true,
      maxWidth: true,
      minHeight: true,
      minWidth: true,
      opacity: true,
      overflow: true,
      overlayColor: { process: _Import20 },
      padding: true,
      paddingBottom: true,
      paddingEnd: true,
      paddingHorizontal: true,
      paddingLeft: true,
      paddingRight: true,
      paddingStart: true,
      paddingTop: true,
      paddingVertical: true,
      position: true,
      resizeMode: true,
      right: true,
      rotation: true,
      scaleX: true,
      scaleY: true,
      shadowColor: { process: _Import21 },
      shadowOffset: { diff: _Import22 },
      shadowOpacity: true,
      shadowRadius: true,
      start: true,
      textAlign: true,
      textAlignVertical: true,
      textDecorationColor: { process: _Import23 },
      textDecorationLine: true,
      textDecorationStyle: true,
      textShadowColor: { process: _Import24 },
      textShadowOffset: true,
      textShadowRadius: true,
      textTransform: true,
      tintColor: { process: _Import25 },
      top: true,
      transform: ((Platform.OS === 'ios' ? { diff: _Import26 } : { process: _Import27 }) as any),
      transformMatrix: true,
      translateX: true,
      translateY: true,
      width: true,
      writingDirection: true,
      zIndex: true
    },
    testID: true,
    top: true,
    transform: ((Platform.OS === 'ios' ? { diff: _Import28 } : { process: _Import29 }) as any),
    translateX: true,
    translateY: true,
    width: true,
    zIndex: true
  }
};

export default ReactNativeViewConfig;;
