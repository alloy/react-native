import { $ReadOnly, $Diff } from "utility-types";
import { ViewProps } from "../View/ViewPropTypes";
import { BubblingEventHandler, DirectEventHandler, Double, Float, Int32, WithDefault } from "../../Types/CodegenTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { TextStyleProp, ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import * as React from "react";
export declare type KeyboardType = // Cross Platform
"default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad" | "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "twitter" | "web-search" | "visible-password";
export declare type ReturnKeyType = // Cross Platform
"done" | "go" | "next" | "search" | "send" | "none" | "previous" | "default" | "emergency-call" | "google" | "join" | "route" | "yahoo";
export declare type NativeProps = $ReadOnly<$Diff<ViewProps, $ReadOnly<{
    style: ViewStyleProp | null | undefined;
}>> & {
    /**
     * Android props after this
     */
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
    autoCompleteType?: WithDefault<"cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "email" | "name" | "password" | "postal-code" | "street-address" | "tel" | "username" | "off", "off">;
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
    numberOfLines?: Int32 | null | undefined;
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
    textBreakStrategy?: WithDefault<"simple" | "highQuality" | "balanced", "simple">;
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
    inlineImagePadding?: Int32 | null | undefined;
    importantForAutofill?: string;
    /**
     * When `false`, it will prevent the soft keyboard from showing when the field is focused.
     * Defaults to `true`.
     * @platform android
     */
    showSoftInputOnFocus?: boolean | null | undefined;
    /**
     * TextInput props after this
     */
    /**
     * Can tell `TextInput` to automatically capitalize certain characters.
     *
     * - `characters`: all characters.
     * - `words`: first letter of each word.
     * - `sentences`: first letter of each sentence (*default*).
     * - `none`: don't auto capitalize anything.
     */
    autoCapitalize?: WithDefault<"none" | "sentences" | "words" | "characters", "none">;
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
    maxFontSizeMultiplier?: Float | null | undefined;
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
     * *Android Only*
     *
     * The following values work on Android only:
     *
     * - `visible-password`
     */
    keyboardType?: WithDefault<KeyboardType, "default">;
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
     */
    returnKeyType?: WithDefault<ReturnKeyType, "done">;
    /**
     * Limits the maximum number of characters that can be entered. Use this
     * instead of implementing the logic in JS to avoid flicker.
     */
    maxLength?: Int32 | null | undefined;
    /**
     * If `true`, the text input can be multiple lines.
     * The default value is `false`.
     */
    multiline?: boolean | null | undefined;
    /**
     * Callback that is called when the text input is blurred.
     * `target` is the reactTag of the element
     */
    onBlur?: BubblingEventHandler<$ReadOnly<{
        target: Int32;
    }>> | null | undefined;
    /**
     * Callback that is called when the text input is focused.
     * `target` is the reactTag of the element
     */
    onFocus?: BubblingEventHandler<$ReadOnly<{
        target: Int32;
    }>> | null | undefined;
    /**
     * Callback that is called when the text input's text changes.
     * `target` is the reactTag of the element
     * TODO: differentiate between onChange and onChangeText
     */
    onChange?: BubblingEventHandler<$ReadOnly<{
        target: Int32;
        eventCount: Int32;
        text: string;
    }>> | null | undefined;
    /**
     * Callback that is called when the text input's text changes.
     * Changed text is passed as an argument to the callback handler.
     * TODO: differentiate between onChange and onChangeText
     */
    onChangeText?: BubblingEventHandler<$ReadOnly<{
        target: Int32;
        eventCount: Int32;
        text: string;
    }>> | null | undefined;
    /**
     * Callback that is called when the text input's content size changes.
     * This will be called with
     * `{ nativeEvent: { contentSize: { width, height } } }`.
     *
     * Only called for multiline text inputs.
     */
    onContentSizeChange?: DirectEventHandler<$ReadOnly<{
        target: Int32;
        contentSize: $ReadOnly<{
            width: Double;
            height: Double;
        }>;
    }>> | null | undefined;
    onTextInput?: BubblingEventHandler<$ReadOnly<{
        target: Int32;
        text: string;
        previousText: string;
        range: $ReadOnly<{
            start: Double;
            end: Double;
        }>;
    }>> | null | undefined;
    /**
     * Callback that is called when text input ends.
     */
    onEndEditing?: BubblingEventHandler<$ReadOnly<{
        target: Int32;
        text: string;
    }>> | null | undefined;
    /**
     * Callback that is called when the text input selection is changed.
     * This will be called with
     * `{ nativeEvent: { selection: { start, end } } }`.
     */
    onSelectionChange?: DirectEventHandler<$ReadOnly<{
        target: Int32;
        selection: $ReadOnly<{
            start: Double;
            end: Double;
        }>;
    }>> | null | undefined;
    /**
     * Callback that is called when the text input's submit button is pressed.
     * Invalid if `multiline={true}` is specified.
     */
    onSubmitEditing?: BubblingEventHandler<$ReadOnly<{
        target: Int32;
        text: string;
    }>> | null | undefined;
    /**
     * Callback that is called when a key is pressed.
     * This will be called with `{ nativeEvent: { key: keyValue } }`
     * where `keyValue` is `'Enter'` or `'Backspace'` for respective keys and
     * the typed-in character otherwise including `' '` for space.
     * Fires before `onChange` callbacks.
     */
    onKeyPress?: BubblingEventHandler<$ReadOnly<{
        target: Int32;
        key: string;
    }>> | null | undefined;
    /**
     * Invoked on content scroll with `{ nativeEvent: { contentOffset: { x, y } } }`.
     * May also contain other properties from ScrollEvent but on Android contentSize
     * is not provided for performance reasons.
     */
    onScroll?: DirectEventHandler<$ReadOnly<{
        target: Int32;
        responderIgnoreScroll: boolean;
        contentInset: $ReadOnly<{
            top: Double;
            bottom: Double;
            left: Double;
            right: Double;
        }>;
        contentOffset: $ReadOnly<{
            x: Double;
            y: Double;
        }>;
        contentSize: $ReadOnly<{
            width: Double;
            height: Double;
        }>;
        layoutMeasurement: $ReadOnly<{
            width: Double;
            height: Double;
        }>;
        velocity: $ReadOnly<{
            x: Double;
            y: Double;
        }>;
    }>> | null | undefined;
    /**
     * The string that will be rendered before text input has been entered.
     */
    placeholder?: string | null | undefined;
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
        start: Int32;
        end?: Int32 | null | undefined;
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
    value?: string | null | undefined;
    /**
     * Provides an initial value that will change when the user starts typing.
     * Useful for simple use-cases where you do not want to deal with listening
     * to events and updating the value prop to keep the controlled state in sync.
     */
    defaultValue?: string | null | undefined;
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
    contextMenuHidden?: boolean | null | undefined;
    /**
     * The following are props that `BaseTextShadowNode` takes. It is unclear if they
     * are used by TextInput.
     */
    textShadowColor?: ColorValue | null | undefined;
    textShadowRadius?: Float | null | undefined;
    textDecorationLine?: string | null | undefined;
    fontStyle?: string | null | undefined;
    textShadowOffset?: $ReadOnly<{
        width?: Double | null | undefined;
        height?: Double | null | undefined;
    }> | null | undefined;
    lineHeight?: Float | null | undefined;
    textTransform?: string | null | undefined;
    color?: Int32 | null | undefined;
    letterSpacing?: Float | null | undefined;
    fontSize?: Float | null | undefined;
    textAlign?: string | null | undefined;
    includeFontPadding?: boolean | null | undefined;
    fontWeight?: string | null | undefined;
    fontFamily?: string | null | undefined;
    /**
     * I cannot find where these are defined but JS complains without them.
     */
    textAlignVertical?: string | null | undefined;
    cursorColor?: ColorValue | null | undefined;
    /**
     * "Private" fields used by TextInput.js and not users of this component directly
     */
    mostRecentEventCount: Int32;
    text?: string | null | undefined;
}>;
declare type NativeType = HostComponent<NativeProps>;
interface NativeCommands {
    readonly focus: (viewRef: React.ElementRef<NativeType>) => void;
    readonly blur: (viewRef: React.ElementRef<NativeType>) => void;
    readonly setMostRecentEventCount: (viewRef: React.ElementRef<NativeType>, eventCount: Int32) => void;
    readonly setTextAndSelection: (viewRef: React.ElementRef<NativeType>, mostRecentEventCount: Int32, value: string | null | undefined, // in theory this is nullable
    start: Int32, end: Int32) => void;
}
export declare const Commands: NativeCommands;
declare const _default: any;
export default _default;
