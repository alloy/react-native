'use strict';;
import { $ReadOnly } from "utility-types";












import Pressability, { PressabilityConfig } from "../../Pressability/Pressability.js";
import { PressabilityDebugView } from "../../Pressability/PressabilityDebug.js";
import TVTouchable from "./TVTouchable";
import { AccessibilityActionEvent, AccessibilityActionInfo, AccessibilityRole, AccessibilityState, AccessibilityValue } from "../../Components/View/ViewAccessibility";
import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";
import { BlurEvent, FocusEvent, LayoutEvent, PressEvent } from "../../Types/CoreEventTypes";
import Platform from "../../Utilities/Platform";
import View from "../../Components/View/View";
import * as React from "react";

type Props = $ReadOnly<{
  accessibilityActions?: ReadonlyArray<AccessibilityActionInfo> | null | undefined;
  accessibilityElementsHidden?: boolean | null | undefined;
  accessibilityHint?: Stringish | null | undefined;
  accessibilityIgnoresInvertColors?: boolean | null | undefined;
  accessibilityLabel?: Stringish | null | undefined;
  accessibilityLiveRegion?: ("none" | "polite" | "assertive") | null | undefined;
  accessibilityRole?: AccessibilityRole | null | undefined;
  accessibilityState?: AccessibilityState | null | undefined;
  accessibilityValue?: AccessibilityValue | null | undefined;
  accessibilityViewIsModal?: boolean | null | undefined;
  accessible?: boolean | null | undefined;
  children?: React.ReactNode | null | undefined;
  delayLongPress?: number | null | undefined;
  delayPressIn?: number | null | undefined;
  delayPressOut?: number | null | undefined;
  disabled?: boolean | null | undefined;
  focusable?: boolean | null | undefined;
  hitSlop?: EdgeInsetsProp | null | undefined;
  importantForAccessibility?: ("auto" | "yes" | "no" | "no-hide-descendants") | null | undefined;
  nativeID?: string | null | undefined;
  onAccessibilityAction?: (event: AccessibilityActionEvent) => unknown | null | undefined;
  onBlur?: (event: BlurEvent) => unknown | null | undefined;
  onFocus?: (event: FocusEvent) => unknown | null | undefined;
  onLayout?: (event: LayoutEvent) => unknown | null | undefined;
  onLongPress?: (event: PressEvent) => unknown | null | undefined;
  onPress?: (event: PressEvent) => unknown | null | undefined;
  onPressIn?: (event: PressEvent) => unknown | null | undefined;
  onPressOut?: (event: PressEvent) => unknown | null | undefined;
  pressRetentionOffset?: EdgeInsetsProp | null | undefined;
  rejectResponderTermination?: boolean | null | undefined;
  testID?: string | null | undefined;
  touchSoundDisabled?: boolean | null | undefined;
}>;

type State = $ReadOnly<{
  pressability: Pressability;
}>;

const PASSTHROUGH_PROPS = ['accessibilityActions', 'accessibilityElementsHidden', 'accessibilityHint', 'accessibilityIgnoresInvertColors', 'accessibilityLabel', 'accessibilityLiveRegion', 'accessibilityRole', 'accessibilityState', 'accessibilityValue', 'accessibilityViewIsModal', 'hitSlop', 'importantForAccessibility', 'nativeID', 'onAccessibilityAction', 'onBlur', 'onFocus', 'onLayout', 'testID'];

class TouchableWithoutFeedback extends React.Component<Props, State> {

  _tvTouchable: TVTouchable | null | undefined;

  state: State = {
    pressability: new Pressability(createPressabilityConfig(this.props))
  };

  render(): React.ReactNode {
    const element = React.Children.only(this.props.children);
    const children = [element.props.children];
    if (__DEV__) {
      if (element.type === View) {
        children.push(<PressabilityDebugView color="red" hitSlop={this.props.hitSlop} />);
      }
    }

    // BACKWARD-COMPATIBILITY: Focus and blur events were never supported before
    // adopting `Pressability`, so preserve that behavior.
    const {
      onBlur,
      onFocus,
      ...eventHandlersWithoutBlurAndFocus
    } = this.state.pressability.getEventHandlers();

    const elementProps: {
      [key: string]: unknown;
    } = {
      ...eventHandlersWithoutBlurAndFocus,
      accessible: this.props.accessible !== false,
      focusable: this.props.focusable !== false && this.props.onPress !== undefined
    };
    for (const prop of PASSTHROUGH_PROPS) {
      if (this.props[prop] !== undefined) {
        elementProps[prop] = this.props[prop];
      }
    }

    return React.cloneElement(element, elementProps, ...children);
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

  componentDidUpdate(): void {
    this.state.pressability.configure(createPressabilityConfig(this.props));
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

function createPressabilityConfig(props: Props): PressabilityConfig {
  return {
    cancelable: !props.rejectResponderTermination,
    disabled: props.disabled,
    hitSlop: props.hitSlop,
    delayLongPress: props.delayLongPress,
    delayPressIn: props.delayPressIn,
    delayPressOut: props.delayPressOut,
    pressRectOffset: props.pressRetentionOffset,
    android_disableSound: props.touchSoundDisabled,
    onBlur: props.onBlur,
    onFocus: props.onFocus,
    onLongPress: props.onLongPress,
    onPress: props.onPress,
    onPressIn: props.onPressIn,
    onPressOut: props.onPressOut
  };
}

export default TouchableWithoutFeedback;
