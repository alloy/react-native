'use strict';;
import DeprecatedTextInputPropTypes from '../../DeprecatedPropTypes/DeprecatedTextInputPropTypes';
import Platform from '../../Utilities/Platform';
import React from 'react';
import ReactNative from '../../Renderer/shims/ReactNative';
import StyleSheet from '../../StyleSheet/StyleSheet';
import Text from '../../Text/Text';
import TextAncestor from '../../Text/TextAncestor';
import TextInputState from './TextInputState';
import TouchableWithoutFeedback from '../Touchable/TouchableWithoutFeedback';
import invariant from 'invariant';
import nullthrows from 'nullthrows';
import setAndForwardRef from '../../Utilities/setAndForwardRef';
import _Import0 from './AndroidTextInputNativeComponent';
import _Import1 from './RCTMultilineTextInputNativeComponent.js';
import _Import2 from './RCTSingelineTextInputNativeComponent.js';
import { $ReadOnly, $Diff, $PropertyType } from "utility-types";












import { TextStyleProp, ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
import { SyntheticEvent, ScrollEvent } from "../../Types/CoreEventTypes";
import { PressEvent } from "../../Types/CoreEventTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

const {
  useEffect,
  useRef,
  useState
} = React;

type ReactRefSetter<T> = {current: null | T;} | ((ref: null | T) => unknown);

let AndroidTextInput;
let RCTMultilineTextInputView;
let RCTSinglelineTextInputView;

if (Platform.OS === 'android') {
  AndroidTextInput = _Import0.default;
} else if (Platform.OS === 'ios') {
  RCTMultilineTextInputView = _Import1.default;
  RCTSinglelineTextInputView = _Import2.default;
}

export type ChangeEvent = React.SyntheticEvent<$ReadOnly<{
  eventCount: number;
  target: number;
  text: string;
}>>;

export type TextInputEvent = React.SyntheticEvent<$ReadOnly<{
  eventCount: number;
  previousText: string;
  range: $ReadOnly<{
    start: number;
    end: number;
  }>;
  target: number;
  text: string;
}>>;

export type ContentSizeChangeEvent = React.SyntheticEvent<$ReadOnly<{
  target: number;
  contentSize: $ReadOnly<{
    width: number;
    height: number;
  }>;
}>>;

type TargetEvent = React.SyntheticEvent<$ReadOnly<{
  target: number;
}>>;

export type BlurEvent = TargetEvent;
export type FocusEvent = TargetEvent;

type Selection = $ReadOnly<{
  start: number;
  end: number;
}>;

export type SelectionChangeEvent = React.SyntheticEvent<$ReadOnly<{
  selection: Selection;
  target: number;
}>>;

export type KeyPressEvent = React.SyntheticEvent<$ReadOnly<{
  key: string;
  target?: number | null | undefined;
  eventCount?: number | null | undefined;
}>>;

export type EditingEvent = React.SyntheticEvent<$ReadOnly<{
  eventCount: number;
  text: string;
  target: number;
}>>;

type DataDetectorTypesType = "phoneNumber" | "link" | "address" | "calendarEvent" | "none" | "all";

export type KeyboardType = // Cross Platform
"default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad" // iOS-only
| "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "twitter" | "web-search" // iOS 10+ only
| "ascii-capable-number-pad" // Android-only
| "visible-password";

export type ReturnKeyType = // Cross Platform
"done" | "go" | "next" | "search" | "send" // Android-only
| "none" | "previous" // iOS-only
| "default" | "emergency-call" | "google" | "join" | "route" | "yahoo";

export type AutoCapitalize = "none" | "sentences" | "words" | "characters";

export type TextContentType = "none" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "emailAddress" | "familyName" | "fullStreetAddress" | "givenName" | "jobTitle" | "location" | "middleName" | "name" | "namePrefix" | "nameSuffix" | "nickname" | "organizationName" | "postalCode" | "streetAddressLine1" | "streetAddressLine2" | "sublocality" | "telephoneNumber" | "username" | "password" | "newPassword" | "oneTimeCode";

type PasswordRules = string;

type IOSProps = $ReadOnly<{
  /**
   * If `false`, disables spell-check style (i.e. red underlines).
   * The default value is inherited from `autoCorrect`.
   * @platform ios
   */
  spellCheck?: boolean | null | undefined;

  /**
   * Determines the color of the keyboard.
   * @platform ios
   */
  keyboardAppearance?: ("default" | "light" | "dark") | null | undefined;

  /**
   * If `true`, the keyboard disables the return key when there is no text and
   * automatically enables it when there is text. The default value is `false`.
   * @platform ios
   */
  enablesReturnKeyAutomatically?: boolean | null | undefined;

  /**
   * When the clear button should appear on the right side of the text view.
   * This property is supported only for single-line TextInput component.
   * @platform ios
   */
  clearButtonMode?: ("never" | "while-editing" | "unless-editing" | "always") | null | undefined;

  /**
   * If `true`, clears the text field automatically when editing begins.
   * @platform ios
   */
  clearTextOnFocus?: boolean | null | undefined;

  /**
   * Determines the types of data converted to clickable URLs in the text input.
   * Only valid if `multiline={true}` and `editable={false}`.
   * By default no data types are detected.
   *
   * You can provide one type or an array of many types.
   *
   * Possible values for `dataDetectorTypes` are:
   *
   * - `'phoneNumber'`
   * - `'link'`
   * - `'address'`
   * - `'calendarEvent'`
   * - `'none'`
   * - `'all'`
   *
   * @platform ios
   */
  dataDetectorTypes?: (DataDetectorTypesType | null | undefined) | ReadonlyArray<DataDetectorTypesType>;

  /**
   * An optional identifier which links a custom InputAccessoryView to
   * this text input. The InputAccessoryView is rendered above the
   * keyboard when this text input is focused.
   * @platform ios
   */
  inputAccessoryViewID?: string | null | undefined;

  /**
   * Give the keyboard and the system information about the
   * expected semantic meaning for the content that users enter.
   * @platform ios
   */
  textContentType?: TextContentType | null | undefined;

  PasswordRules?: PasswordRules | null | undefined;

  /*
   * @platform ios
   */
  rejectResponderTermination?: boolean | null | undefined;

  /**
   * If `false`, scrolling of the text view will be disabled.
   * The default value is `true`. Does only work with 'multiline={true}'.
   * @platform ios
   */
  scrollEnabled?: boolean | null | undefined;
}>;

type AndroidProps = $ReadOnly<{
  /**
   * Determines which content to suggest on auto complete, e.g.`username`.
   * To disable auto complete, use `off`.
   *
   * *Android Only*
   *
   * The following values work on Android only:
   *
   * - `username`
   * - `password`
   * - `email`
   * - `name`
   * - `tel`
   * - `street-address`
   * - `postal-code`
   * - `cc-number`
   * - `cc-csc`
   * - `cc-exp`
   * - `cc-exp-month`
   * - `cc-exp-year`
   * - `off`
   *
   * @platform android
   */
  autoCompleteType?: ("cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "email" | "name" | "password" | "postal-code" | "street-address" | "tel" | "username" | "off") | null | undefined;

  /**
   * Sets the return key to the label. Use it instead of `returnKeyType`.
   * @platform android
   */
  returnKeyLabel?: string | null | undefined;

  /**
   * Sets the number of lines for a `TextInput`. Use it with multiline set to
   * `true` to be able to fill the lines.
   * @platform android
   */
  numberOfLines?: number | null | undefined;

  /**
   * When `false`, if there is a small amount of space available around a text input
   * (e.g. landscape orientation on a phone), the OS may choose to have the user edit
   * the text inside of a full screen text input mode. When `true`, this feature is
   * disabled and users will always edit the text directly inside of the text input.
   * Defaults to `false`.
   * @platform android
   */
  disableFullscreenUI?: boolean | null | undefined;

  /**
   * Set text break strategy on Android API Level 23+, possible values are `simple`, `highQuality`, `balanced`
   * The default value is `simple`.
   * @platform android
   */
  textBreakStrategy?: ("simple" | "highQuality" | "balanced") | null | undefined;

  /**
   * The color of the `TextInput` underline.
   * @platform android
   */
  underlineColorAndroid?: ColorValue | null | undefined;

  /**
   * If defined, the provided image resource will be rendered on the left.
   * The image resource must be inside `/android/app/src/main/res/drawable` and referenced
   * like
   * ```
   * <TextInput
   *  inlineImageLeft='search_icon'
   * />
   * ```
   * @platform android
   */
  inlineImageLeft?: string | null | undefined;

  /**
   * Padding between the inline image, if any, and the text input itself.
   * @platform android
   */
  inlineImagePadding?: number | null | undefined;

  importantForAutofill?: ("auto" | "no" | "noExcludeDescendants" | "yes" | "yesExcludeDescendants") | null | undefined;

  /**
   * When `false`, it will prevent the soft keyboard from showing when the field is focused.
   * Defaults to `true`.
   * @platform android
   */
  showSoftInputOnFocus?: boolean | null | undefined;
}>;

export type Props = $ReadOnly<$Diff<ViewProps, $ReadOnly<{style: ViewStyleProp | null | undefined;}>> & IOSProps & AndroidProps & {
  /**
   * Can tell `TextInput` to automatically capitalize certain characters.
   *
   * - `characters`: all characters.
   * - `words`: first letter of each word.
   * - `sentences`: first letter of each sentence (*default*).
   * - `none`: don't auto capitalize anything.
   */
  autoCapitalize?: AutoCapitalize | null | undefined;

  /**
   * If `false`, disables auto-correct. The default value is `true`.
   */
  autoCorrect?: boolean | null | undefined;

  /**
   * If `true`, focuses the input on `componentDidMount`.
   * The default value is `false`.
   */
  autoFocus?: boolean | null | undefined;

  /**
   * Specifies whether fonts should scale to respect Text Size accessibility settings. The
   * default is `true`.
   */
  allowFontScaling?: boolean | null | undefined;

  /**
   * Specifies largest possible scale a font can reach when `allowFontScaling` is enabled.
   * Possible values:
   * `null/undefined` (default): inherit from the parent node or the global default (0)
   * `0`: no max, ignore parent/global default
   * `>= 1`: sets the maxFontSizeMultiplier of this node to this value
   */
  maxFontSizeMultiplier?: number | null | undefined;

  /**
   * If `false`, text is not editable. The default value is `true`.
   */
  editable?: boolean | null | undefined;

  /**
   * Determines which keyboard to open, e.g.`numeric`.
   *
   * The following values work across platforms:
   *
   * - `default`
   * - `numeric`
   * - `number-pad`
   * - `decimal-pad`
   * - `email-address`
   * - `phone-pad`
   *
   * *iOS Only*
   *
   * The following values work on iOS only:
   *
   * - `ascii-capable`
   * - `numbers-and-punctuation`
   * - `url`
   * - `name-phone-pad`
   * - `twitter`
   * - `web-search`
   *
   * *Android Only*
   *
   * The following values work on Android only:
   *
   * - `visible-password`
   */
  keyboardType?: KeyboardType | null | undefined;

  /**
   * Determines how the return key should look. On Android you can also use
   * `returnKeyLabel`.
   *
   * *Cross platform*
   *
   * The following values work across platforms:
   *
   * - `done`
   * - `go`
   * - `next`
   * - `search`
   * - `send`
   *
   * *Android Only*
   *
   * The following values work on Android only:
   *
   * - `none`
   * - `previous`
   *
   * *iOS Only*
   *
   * The following values work on iOS only:
   *
   * - `default`
   * - `emergency-call`
   * - `google`
   * - `join`
   * - `route`
   * - `yahoo`
   */
  returnKeyType?: ReturnKeyType | null | undefined;

  /**
   * Limits the maximum number of characters that can be entered. Use this
   * instead of implementing the logic in JS to avoid flicker.
   */
  maxLength?: number | null | undefined;

  /**
   * If `true`, the text input can be multiple lines.
   * The default value is `false`.
   */
  multiline?: boolean | null | undefined;

  /**
   * Callback that is called when the text input is blurred.
   */
  onBlur?: ((e: BlurEvent) => unknown) | null | undefined;

  /**
   * Callback that is called when the text input is focused.
   */
  onFocus?: ((e: FocusEvent) => unknown) | null | undefined;

  /**
   * Callback that is called when the text input's text changes.
   */
  onChange?: ((e: ChangeEvent) => unknown) | null | undefined;

  /**
   * Callback that is called when the text input's text changes.
   * Changed text is passed as an argument to the callback handler.
   */
  onChangeText?: ((text: string) => unknown) | null | undefined;

  /**
   * Callback that is called when the text input's content size changes.
   * This will be called with
   * `{ nativeEvent: { contentSize: { width, height } } }`.
   *
   * Only called for multiline text inputs.
   */
  onContentSizeChange?: ((e: ContentSizeChangeEvent) => unknown) | null | undefined;

  /**
   * Callback that is called when text input ends.
   */
  onEndEditing?: ((e: EditingEvent) => unknown) | null | undefined;

  /**
   * Callback that is called when the text input selection is changed.
   * This will be called with
   * `{ nativeEvent: { selection: { start, end } } }`.
   */
  onSelectionChange?: ((e: SelectionChangeEvent) => unknown) | null | undefined;

  /**
   * Callback that is called when the text input's submit button is pressed.
   * Invalid if `multiline={true}` is specified.
   */
  onSubmitEditing?: ((e: EditingEvent) => unknown) | null | undefined;

  /**
   * Callback that is called when a key is pressed.
   * This will be called with `{ nativeEvent: { key: keyValue } }`
   * where `keyValue` is `'Enter'` or `'Backspace'` for respective keys and
   * the typed-in character otherwise including `' '` for space.
   * Fires before `onChange` callbacks.
   */
  onKeyPress?: ((e: KeyPressEvent) => unknown) | null | undefined;

  /**
   * Invoked on content scroll with `{ nativeEvent: { contentOffset: { x, y } } }`.
   * May also contain other properties from ScrollEvent but on Android contentSize
   * is not provided for performance reasons.
   */
  onScroll?: ((e: ScrollEvent) => unknown) | null | undefined;

  /**
   * The string that will be rendered before text input has been entered.
   */
  placeholder?: Stringish | null | undefined;

  /**
   * The text color of the placeholder string.
   */
  placeholderTextColor?: ColorValue | null | undefined;

  /**
   * If `true`, the text input obscures the text entered so that sensitive text
   * like passwords stay secure. The default value is `false`. Does not work with 'multiline={true}'.
   */
  secureTextEntry?: boolean | null | undefined;

  /**
   * The highlight and cursor color of the text input.
   */
  selectionColor?: ColorValue | null | undefined;

  /**
   * The start and end of the text input's selection. Set start and end to
   * the same value to position the cursor.
   */
  selection?: $ReadOnly<{
    start: number;
    end?: number | null | undefined;
  }> | null | undefined;

  /**
   * The value to show for the text input. `TextInput` is a controlled
   * component, which means the native value will be forced to match this
   * value prop if provided. For most uses, this works great, but in some
   * cases this may cause flickering - one common cause is preventing edits
   * by keeping value the same. In addition to simply setting the same value,
   * either set `editable={false}`, or set/update `maxLength` to prevent
   * unwanted edits without flicker.
   */
  value?: Stringish | null | undefined;

  /**
   * Provides an initial value that will change when the user starts typing.
   * Useful for simple use-cases where you do not want to deal with listening
   * to events and updating the value prop to keep the controlled state in sync.
   */
  defaultValue?: Stringish | null | undefined;

  /**
   * If `true`, all text will automatically be selected on focus.
   */
  selectTextOnFocus?: boolean | null | undefined;

  /**
   * If `true`, the text field will blur when submitted.
   * The default value is true for single-line fields and false for
   * multiline fields. Note that for multiline fields, setting `blurOnSubmit`
   * to `true` means that pressing return will blur the field and trigger the
   * `onSubmitEditing` event instead of inserting a newline into the field.
   */
  blurOnSubmit?: boolean | null | undefined;

  /**
   * Note that not all Text styles are supported, an incomplete list of what is not supported includes:
   *
   * - `borderLeftWidth`
   * - `borderTopWidth`
   * - `borderRightWidth`
   * - `borderBottomWidth`
   * - `borderTopLeftRadius`
   * - `borderTopRightRadius`
   * - `borderBottomRightRadius`
   * - `borderBottomLeftRadius`
   *
   * see [Issue#7070](https://github.com/facebook/react-native/issues/7070)
   * for more detail.
   *
   * [Styles](docs/style.html)
   */
  style?: TextStyleProp | null | undefined;

  /**
   * If `true`, caret is hidden. The default value is `false`.
   * This property is supported only for single-line TextInput component on iOS.
   */
  caretHidden?: boolean | null | undefined;

  /*
   * If `true`, contextMenuHidden is hidden. The default value is `false`.
   */
  contextMenuHidden?: boolean | null | undefined;
  forwardedRef?: ReactRefSetter<React.ElementRef<HostComponent<unknown>> & ImperativeMethods> | null | undefined;
}>;

type ImperativeMethods = $ReadOnly<{
  clear: (() => void);
  isFocused: (() => boolean);
  getNativeRef: (() => React.ElementRef<HostComponent<unknown>> | null | undefined);
}>;

const emptyFunctionThatReturnsTrue = () => true;

function useFocusOnMount(initialAutoFocus: boolean | null | undefined, inputRef: {
  current: null | React.ElementRef<HostComponent<unknown>>;
}) {
  const initialAutoFocusValue = useRef<boolean | null | undefined>(initialAutoFocus);

  useEffect(() => {
    // We only want to autofocus on initial mount.
    // Since initialAutoFocusValue and inputRef will never change
    // this should match the expected behavior
    if (initialAutoFocusValue.current) {
      const focus = () => {
        if (inputRef.current != null) {
          inputRef.current.focus();
        }
      };

      let rafId;
      if (Platform.OS === 'android') {
        // On Android this needs to be executed in a rAF callback
        // otherwise the keyboard opens then closes immediately.
        rafId = requestAnimationFrame(focus);
      } else {
        focus();
      }

      return () => {
        if (rafId != null) {
          cancelAnimationFrame(rafId);
        }
      };
    }
  }, [initialAutoFocusValue, inputRef]);
}

/**
 * A foundational component for inputting text into the app via a
 * keyboard. Props provide configurability for several features, such as
 * auto-correction, auto-capitalization, placeholder text, and different keyboard
 * types, such as a numeric keypad.
 *
 * The simplest use case is to plop down a `TextInput` and subscribe to the
 * `onChangeText` events to read the user input. There are also other events,
 * such as `onSubmitEditing` and `onFocus` that can be subscribed to. A simple
 * example:
 *
 * ```ReactNativeWebPlayer
 * import React, { Component } from 'react';
 * import { AppRegistry, TextInput } from 'react-native';
 *
 * export default class UselessTextInput extends Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = { text: 'Useless Placeholder' };
 *   }
 *
 *   render() {
 *     return (
 *       <TextInput
 *         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
 *         onChangeText={(text) => this.setState({text})}
 *         value={this.state.text}
 *       />
 *     );
 *   }
 * }
 *
 * // skip this line if using Create React Native App
 * AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
 * ```
 *
 * Two methods exposed via the native element are .focus() and .blur() that
 * will focus or blur the TextInput programmatically.
 *
 * Note that some props are only available with `multiline={true/false}`.
 * Additionally, border styles that apply to only one side of the element
 * (e.g., `borderBottomColor`, `borderLeftWidth`, etc.) will not be applied if
 * `multiline=false`. To achieve the same effect, you can wrap your `TextInput`
 * in a `View`:
 *
 * ```ReactNativeWebPlayer
 * import React, { Component } from 'react';
 * import { AppRegistry, View, TextInput } from 'react-native';
 *
 * class UselessTextInput extends Component {
 *   render() {
 *     return (
 *       <TextInput
 *         {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
 *         editable = {true}
 *         maxLength = {40}
 *       />
 *     );
 *   }
 * }
 *
 * export default class UselessTextInputMultiline extends Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       text: 'Useless Multiline Placeholder',
 *     };
 *   }
 *
 *   // If you type something in the text box that is a color, the background will change to that
 *   // color.
 *   render() {
 *     return (
 *      <View style={{
 *        backgroundColor: this.state.text,
 *        borderBottomColor: '#000000',
 *        borderBottomWidth: 1 }}
 *      >
 *        <UselessTextInput
 *          multiline = {true}
 *          numberOfLines = {4}
 *          onChangeText={(text) => this.setState({text})}
 *          value={this.state.text}
 *        />
 *      </View>
 *     );
 *   }
 * }
 *
 * // skip these lines if using Create React Native App
 * AppRegistry.registerComponent(
 *  'AwesomeProject',
 *  () => UselessTextInputMultiline
 * );
 * ```
 *
 * `TextInput` has by default a border at the bottom of its view. This border
 * has its padding set by the background image provided by the system, and it
 * cannot be changed. Solutions to avoid this is to either not set height
 * explicitly, case in which the system will take care of displaying the border
 * in the correct position, or to not display the border by setting
 * `underlineColorAndroid` to transparent.
 *
 * Note that on Android performing text selection in input can change
 * app's activity `windowSoftInputMode` param to `adjustResize`.
 * This may cause issues with components that have position: 'absolute'
 * while keyboard is active. To avoid this behavior either specify `windowSoftInputMode`
 * in AndroidManifest.xml ( https://developer.android.com/guide/topics/manifest/activity-element.html )
 * or control this param programmatically with native code.
 *
 */
function InternalTextInput(props: Props): React.ReactNode {
 return null as any;
}

const ExportedForwardRef: React.AbstractComponent<React.ElementConfig<typeof InternalTextInput>, React.ElementRef<HostComponent<unknown>> & ImperativeMethods> = React.forwardRef(function TextInput(props, forwardedRef: ReactRefSetter<React.ElementRef<HostComponent<unknown>> & ImperativeMethods>) {
  return <InternalTextInput {...props} forwardedRef={forwardedRef} />;
});


ExportedForwardRef.defaultProps = {
  allowFontScaling: true,
  rejectResponderTermination: true,
  underlineColorAndroid: 'transparent'
};

// TODO: Deprecate this

ExportedForwardRef.propTypes = DeprecatedTextInputPropTypes;


ExportedForwardRef.State = {
  currentlyFocusedField: TextInputState.currentlyFocusedField,
  focusTextInput: TextInputState.focusTextInput,
  blurTextInput: TextInputState.blurTextInput
};

type TextInputComponentStatics = $ReadOnly<{
  State: $ReadOnly<{
    currentlyFocusedField: typeof TextInputState.currentlyFocusedField;
    focusTextInput: typeof TextInputState.focusTextInput;
    blurTextInput: typeof TextInputState.blurTextInput;
  }>;
  propTypes: typeof DeprecatedTextInputPropTypes;
}>;

const styles = StyleSheet.create({
  multilineInput: {
    // This default top inset makes RCTMultilineTextInputView seem as close as possible
    // to single-line RCTSinglelineTextInputView defaults, using the system defaults
    // of font size 17 and a height of 31 points.
    paddingTop: 5
  }
});

export default (ExportedForwardRef as any) as React.AbstractComponent<React.ElementConfig<typeof InternalTextInput>, $ReadOnly<React.ElementRef<HostComponent<unknown>> & ImperativeMethods>> & TextInputComponentStatics;;
