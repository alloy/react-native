yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/Touchable/TouchableNativeFeedback.js
'use strict';
import { $ReadOnly } from "utility-types";












import Pressability, { PressabilityConfig } from "../../Pressability/Pressability.js";
import { PressabilityDebugView } from "../../Pressability/PressabilityDebug.js";
import TVTouchable from "./TVTouchable";
import TouchableWithoutFeedback from "./TouchableWithoutFeedback";
import { Commands } from "react-native/Libraries/Components/View/ViewNativeComponent";
import ReactNative from "react-native/Libraries/Renderer/shims/ReactNative";
import { PressEvent } from "react-native/Libraries/Types/CoreEventTypes";
import Platform from "../../Utilities/Platform";
import View from "../../Components/View/View";
import processColor from "../../StyleSheet/processColor";
import * as React from "react";

type Props = $ReadOnly<React.ElementConfig<TouchableWithoutFeedback> & {
  /**
   * Determines the type of background drawable that's going to be used to
   * display feedback. It takes an object with `type` property and extra data
   * depending on the `type`. It's recommended to use one of the static
   * methods to generate that dictionary.
   */
  background?: ($ReadOnly<{
    type: "ThemeAttrAndroid";
    attribute: "selectableItemBackground" | "selectableItemBackgroundBorderless";
  }> | $ReadOnly<{
    type: "RippleAndroid";
    color: number | null | undefined;
    borderless: boolean;
  }>) | null | undefined;

  /**
   * TV preferred focus (see documentation for the View component).
   */
  hasTVPreferredFocus?: boolean | null | undefined;

  /**
   * TV next focus down (see documentation for the View component).
   */
  nextFocusDown?: number | null | undefined;

  /**
   * TV next focus forward (see documentation for the View component).
   */
  nextFocusForward?: number | null | undefined;

  /**
   * TV next focus left (see documentation for the View component).
   */
  nextFocusLeft?: number | null | undefined;

  /**
   * TV next focus right (see documentation for the View component).
   */
  nextFocusRight?: number | null | undefined;

  /**
   * TV next focus up (see documentation for the View component).
   */
  nextFocusUp?: number | null | undefined;

  /**
   * Set to true to add the ripple effect to the foreground of the view, instead
   * of the background. This is useful if one of your child views has a
   * background of its own, or you're e.g. displaying images, and you don't want
   * the ripple to be covered by them.
   *
   * Check TouchableNativeFeedback.canUseNativeForeground() first, as this is
   * only available on Android 6.0 and above. If you try to use this on older
   * versions, this will fallback to background.
   */
  useForeground?: boolean | null | undefined;
}>;

type State = $ReadOnly<{
  pressability: Pressability;
}>;

class TouchableNativeFeedback extends React.Component<Props, State> {
  /**
   * Creates a value for the `background` prop that uses the Android theme's
   * default background for selectable elements.
   */
  static SelectableBackground: () => $ReadOnly<{
    attribute: "selectableItemBackground";
    type: "ThemeAttrAndroid";
  }> = () => ({
    type: 'ThemeAttrAndroid',
    attribute: 'selectableItemBackground'
  });

  /**
   * Creates a value for the `background` prop that uses the Android theme's
   * default background for borderless selectable elements. Requires API 21+.
   */
  static SelectableBackgroundBorderless: () => $ReadOnly<{
    attribute: "selectableItemBackgroundBorderless";
    type: "ThemeAttrAndroid";
  }> = () => ({
    type: 'ThemeAttrAndroid',
    attribute: 'selectableItemBackgroundBorderless'
  });

  /**
   * Creates a value for the `background` prop that uses the Android ripple with
   * the supplied color. If `borderless` is true, the ripple will render outside
   * of the view bounds. Requires API 21+.
   */
  static Ripple: (color: string, borderless: boolean) => $ReadOnly<{
    borderless: boolean;
    color: number | null | undefined;
    type: "RippleAndroid";
  }> = (color: string, borderless: boolean) => ({
    type: 'RippleAndroid',
    color: processColor(color),
    borderless
  });

  /**
   * Whether `useForeground` is supported.
   */
  static canUseNativeForeground: () => boolean = () => Platform.OS === 'android' && Platform.Version >= 23;

  _tvTouchable: TVTouchable | null | undefined;

  state: State = {
    pressability: new Pressability(this._createPressabilityConfig())
  };

  _createPressabilityConfig(): PressabilityConfig {
    return {
      cancelable: !this.props.rejectResponderTermination,
      disabled: this.props.disabled,
      hitSlop: this.props.hitSlop,
      delayLongPress: this.props.delayLongPress,
      delayPressIn: this.props.delayPressIn,
      delayPressOut: this.props.delayPressOut,
      pressRectOffset: this.props.pressRetentionOffset,
      android_disableSound: this.props.touchSoundDisabled,
      onLongPress: this.props.onLongPress,
      onPress: this.props.onPress,
      onPressIn: event => {
        if (Platform.OS === 'android') {
          this._dispatchPressedStateChange(true);
          this._dispatchHotspotUpdate(event);
        }
        if (this.props.onPressIn != null) {
          this.props.onPressIn(event);
        }
      },
      onPressMove: event => {
        if (Platform.OS === 'android') {
          this._dispatchHotspotUpdate(event);
        }
      },
      onPressOut: event => {
        if (Platform.OS === 'android') {
          this._dispatchPressedStateChange(false);
        }
        if (this.props.onPressOut != null) {
          this.props.onPressOut(event);
        }
      }
    };
  }

  _dispatchPressedStateChange(pressed: boolean): void {
    if (Platform.OS === 'android') {
      const hostComponentRef = ReactNative.findHostInstance_DEPRECATED(this);
      if (hostComponentRef == null) {
        console.warn('Touchable: Unable to find HostComponent instance. ' + 'Has your Touchable component been unmounted?');
      } else {
        Commands.setPressed(hostComponentRef, pressed);
      }
    }
  }

  _dispatchHotspotUpdate(event: PressEvent): void {
    if (Platform.OS === 'android') {
      const {
        locationX,
        locationY
      } = event.nativeEvent;
      const hostComponentRef = ReactNative.findHostInstance_DEPRECATED(this);
      if (hostComponentRef == null) {
        console.warn('Touchable: Unable to find HostComponent instance. ' + 'Has your Touchable component been unmounted?');
      } else {
        Commands.hotspotUpdate(hostComponentRef, locationX ?? 0, locationY ?? 0);
      }
    }
  }

  render(): React.ReactNode {
    const element = React.Children.only(this.props.children);
    const children = [element.props.children];
    if (__DEV__) {
      if (element.type === View) {
        children.push(<PressabilityDebugView color="brown" hitSlop={this.props.hitSlop} />);
      }
    }

    // BACKWARD-COMPATIBILITY: Focus and blur events were never supported before
    // adopting `Pressability`, so preserve that behavior.
    const {
      onBlur,
      onFocus,
      ...eventHandlersWithoutBlurAndFocus
    } = this.state.pressability.getEventHandlers();

    return React.cloneElement(element, {
      ...eventHandlersWithoutBlurAndFocus,
      ...getBackgroundProp(this.props.background === undefined ? TouchableNativeFeedback.SelectableBackground() : this.props.background, this.props.useForeground === true),
      accessible: this.props.accessible !== false,
      accessibilityLabel: this.props.accessibilityLabel,
      accessibilityRole: this.props.accessibilityRole,
      accessibilityState: this.props.accessibilityState,
      accessibilityActions: this.props.accessibilityActions,
      onAccessibilityAction: this.props.onAccessibilityAction,
      accessibilityValue: this.props.accessibilityValue,
      importantForAccessibility: this.props.importantForAccessibility,
      accessibilityLiveRegion: this.props.accessibilityLiveRegion,
      accessibilityViewIsModal: this.props.accessibilityViewIsModal,
      accessibilityElementsHidden: this.props.accessibilityElementsHidden,
      hasTVPreferredFocus: this.props.hasTVPreferredFocus,
      hitSlop: this.props.hitSlop,
      focusable: this.props.focusable !== false && this.props.onPress !== undefined && !this.props.disabled,
      nativeID: this.props.nativeID,
      nextFocusDown: this.props.nextFocusDown,
      nextFocusForward: this.props.nextFocusForward,
      nextFocusLeft: this.props.nextFocusLeft,
      nextFocusRight: this.props.nextFocusRight,
      nextFocusUp: this.props.nextFocusUp,
      onLayout: this.props.onLayout,
      testID: this.props.testID
    }, ...children);
  }

  componentDidMount(): void {
    if (Platform.isTV) {
      this._tvTouchable = new TVTouchable(this, {
        getDisabled: () => this.props.disabled === true,
        onBlur: event => {
          if (this.props.onBlur != null) {
            this.props.onBlur(event);
          }
        },
        onFocus: event => {
          if (this.props.onFocus != null) {
            this.props.onFocus(event);
          }
        },
        onPress: event => {
          if (this.props.onPress != null) {
            this.props.onPress(event);
          }
        }
      });
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    this.state.pressability.configure(this._createPressabilityConfig());
  }

  componentWillUnmount(): void {
    if (Platform.isTV) {
      if (this._tvTouchable != null) {
        this._tvTouchable.destroy();
      }
    }
    this.state.pressability.reset();
  }
}

const getBackgroundProp = Platform.OS === 'android' ? (background, useForeground) => useForeground && TouchableNativeFeedback.canUseNativeForeground() ? { nativeForegroundAndroid: background } : { nativeBackgroundAndroid: background } : (background, useForeground) => null;

module.exports = TouchableNativeFeedback;
Done in 0.61s.
