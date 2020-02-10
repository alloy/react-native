'use strict';
import { $ReadOnly } from "utility-types";












import { BlurEvent, FocusEvent, MouseEvent, PressEvent, Layout, LayoutEvent } from "../../Types/CoreEventTypes";
import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";
import { Node } from "react";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { AccessibilityRole, AccessibilityState, AccessibilityValue, AccessibilityActionEvent, AccessibilityActionInfo } from "./ViewAccessibility";

export type ViewLayout = Layout;
export type ViewLayoutEvent = LayoutEvent;

type BubblingEventProps = $ReadOnly<{
  onBlur?: ((event: BlurEvent) => unknown) | null | undefined;
  onFocus?: ((event: FocusEvent) => unknown) | null | undefined;
}>;

type DirectEventProps = $ReadOnly<{
  /**
   * When `accessible` is true, the system will try to invoke this function
   * when the user performs an accessibility custom action.
   *
   */
  onAccessibilityAction?: ((event: AccessibilityActionEvent) => unknown) | null | undefined;

  /**
   * When `accessible` is true, the system will try to invoke this function
   * when the user performs accessibility tap gesture.
   *
   * See http://facebook.github.io/react-native/docs/view.html#onaccessibilitytap
   */
  onAccessibilityTap?: (() => unknown) | null | undefined;

  /**
   * Invoked on mount and layout changes with:
   *
   * `{nativeEvent: { layout: {x, y, width, height}}}`
   *
   * This event is fired immediately once the layout has been calculated, but
   * the new layout may not yet be reflected on the screen at the time the
   * event is received, especially if a layout animation is in progress.
   *
   * See http://facebook.github.io/react-native/docs/view.html#onlayout
   */
  onLayout?: ((event: LayoutEvent) => unknown) | null | undefined;

  /**
   * When `accessible` is `true`, the system will invoke this function when the
   * user performs the magic tap gesture.
   *
   * See http://facebook.github.io/react-native/docs/view.html#onmagictap
   */
  onMagicTap?: (() => unknown) | null | undefined;

  /**
   * When `accessible` is `true`, the system will invoke this function when the
   * user performs the escape gesture.
   *
   * See http://facebook.github.io/react-native/docs/view.html#onaccessibilityescape
   */
  onAccessibilityEscape?: (() => unknown) | null | undefined;
}>;

type MouseEventProps = $ReadOnly<{
  onMouseEnter?: ((event: MouseEvent) => void);
  onMouseLeave?: ((event: MouseEvent) => void);
}>;

type TouchEventProps = $ReadOnly<{
  onTouchCancel?: ((e: PressEvent) => void) | null | undefined;
  onTouchCancelCapture?: ((e: PressEvent) => void) | null | undefined;
  onTouchEnd?: ((e: PressEvent) => void) | null | undefined;
  onTouchEndCapture?: ((e: PressEvent) => void) | null | undefined;
  onTouchMove?: ((e: PressEvent) => void) | null | undefined;
  onTouchMoveCapture?: ((e: PressEvent) => void) | null | undefined;
  onTouchStart?: ((e: PressEvent) => void) | null | undefined;
  onTouchStartCapture?: ((e: PressEvent) => void) | null | undefined;
}>;

/**
 * For most touch interactions, you'll simply want to wrap your component in
 * `TouchableHighlight` or `TouchableOpacity`. Check out `Touchable.js`,
 * `ScrollResponder.js` and `ResponderEventPlugin.js` for more discussion.
 */
type GestureResponderEventProps = $ReadOnly<{
  /**
   * Does this view want to "claim" touch responsiveness? This is called for
   * every touch move on the `View` when it is not the responder.
   *
   * `View.props.onMoveShouldSetResponder: (event) => [true | false]`, where
   * `event` is a synthetic touch event as described above.
   *
   * See http://facebook.github.io/react-native/docs/view.html#onmoveshouldsetresponder
   */
  onMoveShouldSetResponder?: ((e: PressEvent) => boolean) | null | undefined;

  /**
   * If a parent `View` wants to prevent a child `View` from becoming responder
   * on a move, it should have this handler which returns `true`.
   *
   * `View.props.onMoveShouldSetResponderCapture: (event) => [true | false]`,
   * where `event` is a synthetic touch event as described above.
   *
   * See http://facebook.github.io/react-native/docs/view.html#onMoveShouldsetrespondercapture
   */
  onMoveShouldSetResponderCapture?: ((e: PressEvent) => boolean) | null | undefined;

  /**
   * The View is now responding for touch events. This is the time to highlight
   * and show the user what is happening.
   *
   * `View.props.onResponderGrant: (event) => {}`, where `event` is a synthetic
   * touch event as described above.
   *
   * PanResponder includes a note `// TODO: t7467124 investigate if this can be removed` that
   * should help fixing this return type.
   *
   * See http://facebook.github.io/react-native/docs/view.html#onrespondergrant
   */
  onResponderGrant?: ((e: PressEvent) => void | boolean) | null | undefined;

  /**
   * The user is moving their finger.
   *
   * `View.props.onResponderMove: (event) => {}`, where `event` is a synthetic
   * touch event as described above.
   *
   * See http://facebook.github.io/react-native/docs/view.html#onrespondermove
   */
  onResponderMove?: ((e: PressEvent) => void) | null | undefined;

  /**
   * Another responder is already active and will not release it to that `View`
   * asking to be the responder.
   *
   * `View.props.onResponderReject: (event) => {}`, where `event` is a
   * synthetic touch event as described above.
   *
   * See http://facebook.github.io/react-native/docs/view.html#onresponderreject
   */
  onResponderReject?: ((e: PressEvent) => void) | null | undefined;

  /**
   * Fired at the end of the touch.
   *
   * `View.props.onResponderRelease: (event) => {}`, where `event` is a
   * synthetic touch event as described above.
   *
   * See http://facebook.github.io/react-native/docs/view.html#onresponderrelease
   */
  onResponderRelease?: ((e: PressEvent) => void) | null | undefined;

  onResponderStart?: ((e: PressEvent) => void) | null | undefined;
  onResponderEnd?: ((e: PressEvent) => void) | null | undefined;

  /**
   * The responder has been taken from the `View`. Might be taken by other
   * views after a call to `onResponderTerminationRequest`, or might be taken
   * by the OS without asking (e.g., happens with control center/ notification
   * center on iOS)
   *
   * `View.props.onResponderTerminate: (event) => {}`, where `event` is a
   * synthetic touch event as described above.
   *
   * See http://facebook.github.io/react-native/docs/view.html#onresponderterminate
   */
  onResponderTerminate?: ((e: PressEvent) => void) | null | undefined;

  /**
   * Some other `View` wants to become responder and is asking this `View` to
   * release its responder. Returning `true` allows its release.
   *
   * `View.props.onResponderTerminationRequest: (event) => {}`, where `event`
   * is a synthetic touch event as described above.
   *
   * See http://facebook.github.io/react-native/docs/view.html#onresponderterminationrequest
   */
  onResponderTerminationRequest?: ((e: PressEvent) => boolean) | null | undefined;

  /**
   * Does this view want to become responder on the start of a touch?
   *
   * `View.props.onStartShouldSetResponder: (event) => [true | false]`, where
   * `event` is a synthetic touch event as described above.
   *
   * See http://facebook.github.io/react-native/docs/view.html#onstartshouldsetresponder
   */
  onStartShouldSetResponder?: ((e: PressEvent) => boolean) | null | undefined;

  /**
   * If a parent `View` wants to prevent a child `View` from becoming responder
   * on a touch start, it should have this handler which returns `true`.
   *
   * `View.props.onStartShouldSetResponderCapture: (event) => [true | false]`,
   * where `event` is a synthetic touch event as described above.
   *
   * See http://facebook.github.io/react-native/docs/view.html#onstartshouldsetrespondercapture
   */
  onStartShouldSetResponderCapture?: ((e: PressEvent) => boolean) | null | undefined;
}>;

type AndroidDrawableThemeAttr = $ReadOnly<{
  type: "ThemeAttrAndroid";
  attribute: string;
}>;

type AndroidDrawableRipple = $ReadOnly<{
  type: "RippleAndroid";
  color?: number | null | undefined;
  borderless?: boolean | null | undefined;
}>;

type AndroidDrawable = AndroidDrawableThemeAttr | AndroidDrawableRipple;

type AndroidViewProps = $ReadOnly<{
  nativeBackgroundAndroid?: AndroidDrawable | null | undefined;
  nativeForegroundAndroid?: AndroidDrawable | null | undefined;

  /**
   * Whether this `View` should render itself (and all of its children) into a
   * single hardware texture on the GPU.
   *
   * @platform android
   *
   * See http://facebook.github.io/react-native/docs/view.html#rendertohardwaretextureandroid
   */
  renderToHardwareTextureAndroid?: boolean | null | undefined;

  /**
   * Views that are only used to layout their children or otherwise don't draw
   * anything may be automatically removed from the native hierarchy as an
   * optimization. Set this property to `false` to disable this optimization and
   * ensure that this `View` exists in the native view hierarchy.
   *
   * @platform android
   *
   * See http://facebook.github.io/react-native/docs/view.html#collapsable
   */
  collapsable?: boolean | null | undefined;

  /**
   * Whether this `View` needs to rendered offscreen and composited with an
   * alpha in order to preserve 100% correct colors and blending behavior.
   *
   * @platform android
   *
   * See http://facebook.github.io/react-native/docs/view.html#needsoffscreenalphacompositing
   */
  needsOffscreenAlphaCompositing?: boolean | null | undefined;

  /**
   * Indicates to accessibility services whether the user should be notified
   * when this view changes. Works for Android API >= 19 only.
   *
   * @platform android
   *
   * See http://facebook.github.io/react-native/docs/view.html#accessibilityliveregion
   */
  accessibilityLiveRegion?: ("none" | "polite" | "assertive") | null | undefined;

  /**
   * Controls how view is important for accessibility which is if it
   * fires accessibility events and if it is reported to accessibility services
   * that query the screen. Works for Android only.
   *
   * @platform android
   *
   * See http://facebook.github.io/react-native/docs/view.html#importantforaccessibility
   */
  importantForAccessibility?: ("auto" | "yes" | "no" | "no-hide-descendants") | null | undefined;

  /**
   * Whether to force the Android TV focus engine to move focus to this view.
   *
   * @platform android
   */
  hasTVPreferredFocus?: boolean | null | undefined;

  /**
   * TV next focus down (see documentation for the View component).
   *
   * @platform android
   */
  nextFocusDown?: number | null | undefined;

  /**
   * TV next focus forward (see documentation for the View component).
   *
   * @platform android
   */
  nextFocusForward?: number | null | undefined;

  /**
   * TV next focus left (see documentation for the View component).
   *
   * @platform android
   */
  nextFocusLeft?: number | null | undefined;

  /**
   * TV next focus right (see documentation for the View component).
   *
   * @platform android
   */
  nextFocusRight?: number | null | undefined;

  /**
   * TV next focus up (see documentation for the View component).
   *
   * @platform android
   */
  nextFocusUp?: number | null | undefined;

  /**
   * Whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard.
   *
   * @platform android
   */
  focusable?: boolean;

  /**
   * The action to perform when this `View` is clicked on by a non-touch click, eg. enter key on a hardware keyboard.
   *
   * @platform android
   */
  onClick?: ((event: PressEvent) => unknown) | null | undefined;
}>;

type IOSViewProps = $ReadOnly<{
  /**
   * Prevents view from being inverted if set to true and color inversion is turned on.
   *
   * @platform ios
   */
  accessibilityIgnoresInvertColors?: boolean | null | undefined;

  /**
   * A value indicating whether VoiceOver should ignore the elements
   * within views that are siblings of the receiver.
   * Default is `false`.
   *
   * @platform ios
   *
   * See http://facebook.github.io/react-native/docs/view.html#accessibilityviewismodal
   */
  accessibilityViewIsModal?: boolean | null | undefined;

  /**
   * A value indicating whether the accessibility elements contained within
   * this accessibility element are hidden.
   *
   * @platform ios
   *
   * See http://facebook.github.io/react-native/docs/view.html#accessibilityElementsHidden
   */
  accessibilityElementsHidden?: boolean | null | undefined;

  /**
   * Whether this `View` should be rendered as a bitmap before compositing.
   *
   * @platform ios
   *
   * See http://facebook.github.io/react-native/docs/view.html#shouldrasterizeios
   */
  shouldRasterizeIOS?: boolean | null | undefined;
}>;

export type ViewProps = $ReadOnly<BubblingEventProps & DirectEventProps & GestureResponderEventProps & MouseEventProps & TouchEventProps & AndroidViewProps & IOSViewProps & {
  children?: Node;
  style?: ViewStyleProp | null | undefined;

  /**
   * When `true`, indicates that the view is an accessibility element.
   * By default, all the touchable elements are accessible.
   *
   * See http://facebook.github.io/react-native/docs/view.html#accessible
   */
  accessible?: boolean | null | undefined;

  /**
   * Overrides the text that's read by the screen reader when the user interacts
   * with the element. By default, the label is constructed by traversing all
   * the children and accumulating all the `Text` nodes separated by space.
   *
   * See http://facebook.github.io/react-native/docs/view.html#accessibilitylabel
   */
  accessibilityLabel?: Stringish | null | undefined;

  /**
   * An accessibility hint helps users understand what will happen when they perform
   * an action on the accessibility element when that result is not obvious from the
   * accessibility label.
   *
   *
   * See http://facebook.github.io/react-native/docs/view.html#accessibilityHint
   */
  accessibilityHint?: Stringish | null | undefined;

  /**
   * Indicates to accessibility services to treat UI component like a specific role.
   */
  accessibilityRole?: AccessibilityRole | null | undefined;

  /**
   * Indicates to accessibility services that UI Component is in a specific State.
   */
  accessibilityState?: AccessibilityState | null | undefined;
  accessibilityValue?: AccessibilityValue | null | undefined;

  /**
   * Provides an array of custom actions available for accessibility.
   *
   */
  accessibilityActions?: ReadonlyArray<AccessibilityActionInfo> | null | undefined;

  /**
   * Used to locate this view in end-to-end tests.
   *
   * > This disables the 'layout-only view removal' optimization for this view!
   *
   * See http://facebook.github.io/react-native/docs/view.html#testid
   */
  testID?: string | null | undefined;

  /**
   * Used to locate this view from native classes.
   *
   * > This disables the 'layout-only view removal' optimization for this view!
   *
   * See http://facebook.github.io/react-native/docs/view.html#nativeid
   */
  nativeID?: string | null | undefined;

  /**
   * This defines how far a touch event can start away from the view.
   * Typical interface guidelines recommend touch targets that are at least
   * 30 - 40 points/density-independent pixels.
   *
   * > The touch area never extends past the parent view bounds and the Z-index
   * > of sibling views always takes precedence if a touch hits two overlapping
   * > views.
   *
   * See http://facebook.github.io/react-native/docs/view.html#hitslop
   */
  hitSlop?: EdgeInsetsProp | null | undefined;

  /**
   * Controls whether the `View` can be the target of touch events.
   *
   * See http://facebook.github.io/react-native/docs/view.html#pointerevents
   */
  pointerEvents?: ("auto" | "box-none" | "box-only" | "none") | null | undefined;

  /**
   * This is a special performance property exposed by `RCTView` and is useful
   * for scrolling content when there are many subviews, most of which are
   * offscreen. For this property to be effective, it must be applied to a
   * view that contains many subviews that extend outside its bound. The
   * subviews must also have `overflow: hidden`, as should the containing view
   * (or one of its superviews).
   *
   * See http://facebook.github.io/react-native/docs/view.html#removeclippedsubviews
   */
  removeClippedSubviews?: boolean | null | undefined;
}>;
