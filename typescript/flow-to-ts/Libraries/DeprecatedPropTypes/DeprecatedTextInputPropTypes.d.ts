import PropTypes from 'prop-types';
declare const _default: {
    /**
     * Can tell `TextInput` to automatically capitalize certain characters.
     *
     * - `characters`: all characters.
     * - `words`: first letter of each word.
     * - `sentences`: first letter of each sentence (*default*).
     * - `none`: don't auto capitalize anything.
     */
    autoCapitalize: any;
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
    autoCompleteType: any;
    /**
     * If `false`, disables auto-correct. The default value is `true`.
     */
    autoCorrect: PropTypes.Requireable<boolean>;
    /**
     * If `false`, disables spell-check style (i.e. red underlines).
     * The default value is inherited from `autoCorrect`.
     * @platform ios
     */
    spellCheck: PropTypes.Requireable<boolean>;
    /**
     * If `true`, focuses the input on `componentDidMount`.
     * The default value is `false`.
     */
    autoFocus: PropTypes.Requireable<boolean>;
    /**
     * Specifies whether fonts should scale to respect Text Size accessibility settings. The
     * default is `true`.
     */
    allowFontScaling: PropTypes.Requireable<boolean>;
    /**
     * Specifies largest possible scale a font can reach when `allowFontScaling` is enabled.
     * Possible values:
     * `null/undefined` (default): inherit from the parent node or the global default (0)
     * `0`: no max, ignore parent/global default
     * `>= 1`: sets the maxFontSizeMultiplier of this node to this value
     */
    maxFontSizeMultiplier: PropTypes.Requireable<number>;
    /**
     * If `false`, text is not editable. The default value is `true`.
     */
    editable: PropTypes.Requireable<boolean>;
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
     * - `ascii-capable-number-pad`
     *
     * *Android Only*
     *
     * The following values work on Android only:
     *
     * - `visible-password`
     */
    keyboardType: any;
    /**
     * Determines the color of the keyboard.
     * @platform ios
     */
    keyboardAppearance: any;
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
    returnKeyType: any;
    /**
     * Sets the return key to the label. Use it instead of `returnKeyType`.
     * @platform android
     */
    returnKeyLabel: PropTypes.Requireable<string>;
    /**
     * Limits the maximum number of characters that can be entered. Use this
     * instead of implementing the logic in JS to avoid flicker.
     */
    maxLength: PropTypes.Requireable<number>;
    /**
     * Sets the number of lines for a `TextInput`. Use it with multiline set to
     * `true` to be able to fill the lines.
     * @platform android
     */
    numberOfLines: PropTypes.Requireable<number>;
    /**
     * When `false`, if there is a small amount of space available around a text input
     * (e.g. landscape orientation on a phone), the OS may choose to have the user edit
     * the text inside of a full screen text input mode. When `true`, this feature is
     * disabled and users will always edit the text directly inside of the text input.
     * Defaults to `false`.
     * @platform android
     */
    disableFullscreenUI: PropTypes.Requireable<boolean>;
    /**
     * If `true`, the keyboard disables the return key when there is no text and
     * automatically enables it when there is text. The default value is `false`.
     * @platform ios
     */
    enablesReturnKeyAutomatically: PropTypes.Requireable<boolean>;
    /**
     * If `true`, the text input can be multiple lines.
     * The default value is `false`.
     */
    multiline: PropTypes.Requireable<boolean>;
    /**
     * Set text break strategy on Android API Level 23+, possible values are `simple`, `highQuality`, `balanced`
     * The default value is `simple`.
     * @platform android
     */
    textBreakStrategy: any;
    /**
     * Callback that is called when the text input is blurred.
     */
    onBlur: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * Callback that is called when the text input is focused.
     */
    onFocus: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * Callback that is called when the text input's text changes.
     */
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * Callback that is called when the text input's text changes.
     * Changed text is passed as an argument to the callback handler.
     */
    onChangeText: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * Callback that is called when the text input's content size changes.
     * This will be called with
     * `{ nativeEvent: { contentSize: { width, height } } }`.
     *
     * Only called for multiline text inputs.
     */
    onContentSizeChange: PropTypes.Requireable<(...args: any[]) => any>;
    onTextInput: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * Callback that is called when text input ends.
     */
    onEndEditing: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * Callback that is called when the text input selection is changed.
     * This will be called with
     * `{ nativeEvent: { selection: { start, end } } }`.
     */
    onSelectionChange: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * Callback that is called when the text input's submit button is pressed.
     * Invalid if `multiline={true}` is specified.
     */
    onSubmitEditing: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * Callback that is called when a key is pressed.
     * This will be called with `{ nativeEvent: { key: keyValue } }`
     * where `keyValue` is `'Enter'` or `'Backspace'` for respective keys and
     * the typed-in character otherwise including `' '` for space.
     * Fires before `onChange` callbacks.
     */
    onKeyPress: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * Invoked on mount and layout changes with `{x, y, width, height}`.
     */
    onLayout: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * Invoked on content scroll with `{ nativeEvent: { contentOffset: { x, y } } }`.
     * May also contain other properties from ScrollEvent but on Android contentSize
     * is not provided for performance reasons.
     */
    onScroll: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * The string that will be rendered before text input has been entered.
     */
    placeholder: PropTypes.Requireable<string>;
    /**
     * The text color of the placeholder string.
     */
    placeholderTextColor: any;
    /**
     * If `false`, scrolling of the text view will be disabled.
     * The default value is `true`. Does only work with 'multiline={true}'.
     * @platform ios
     */
    scrollEnabled: PropTypes.Requireable<boolean>;
    /**
     * If `true`, the text input obscures the text entered so that sensitive text
     * like passwords stay secure. The default value is `false`. Does not work with 'multiline={true}'.
     */
    secureTextEntry: PropTypes.Requireable<boolean>;
    /**
     * The highlight and cursor color of the text input.
     */
    selectionColor: any;
    /**
     * The start and end of the text input's selection. Set start and end to
     * the same value to position the cursor.
     */
    selection: any;
    /**
     * The value to show for the text input. `TextInput` is a controlled
     * component, which means the native value will be forced to match this
     * value prop if provided. For most uses, this works great, but in some
     * cases this may cause flickering - one common cause is preventing edits
     * by keeping value the same. In addition to simply setting the same value,
     * either set `editable={false}`, or set/update `maxLength` to prevent
     * unwanted edits without flicker.
     */
    value: PropTypes.Requireable<string>;
    /**
     * Provides an initial value that will change when the user starts typing.
     * Useful for simple use-cases where you do not want to deal with listening
     * to events and updating the value prop to keep the controlled state in sync.
     */
    defaultValue: PropTypes.Requireable<string>;
    /**
     * When the clear button should appear on the right side of the text view.
     * This property is supported only for single-line TextInput component.
     * @platform ios
     */
    clearButtonMode: any;
    /**
     * If `true`, clears the text field automatically when editing begins.
     * @platform ios
     */
    clearTextOnFocus: PropTypes.Requireable<boolean>;
    /**
     * If `true`, all text will automatically be selected on focus.
     */
    selectTextOnFocus: PropTypes.Requireable<boolean>;
    /**
     * If `true`, the text field will blur when submitted.
     * The default value is true for single-line fields and false for
     * multiline fields. Note that for multiline fields, setting `blurOnSubmit`
     * to `true` means that pressing return will blur the field and trigger the
     * `onSubmitEditing` event instead of inserting a newline into the field.
     */
    blurOnSubmit: PropTypes.Requireable<boolean>;
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
    style: any;
    /**
     * The color of the `TextInput` underline.
     * @platform android
     */
    underlineColorAndroid: any;
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
    inlineImageLeft: PropTypes.Requireable<string>;
    /**
     * Padding between the inline image, if any, and the text input itself.
     * @platform android
     */
    inlineImagePadding: PropTypes.Requireable<number>;
    /**
     * If `true`, allows TextInput to pass touch events to the parent component.
     * This allows components such as SwipeableListView to be swipeable from the TextInput on iOS,
     * as is the case on Android by default.
     * If `false`, TextInput always asks to handle the input (except when disabled).
     * @platform ios
     */
    rejectResponderTermination: PropTypes.Requireable<boolean>;
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
    dataDetectorTypes: any;
    /**
     * If `true`, caret is hidden. The default value is `false`.
     * This property is supported only for single-line TextInput component on iOS.
     */
    caretHidden: PropTypes.Requireable<boolean>;
    contextMenuHidden: PropTypes.Requireable<boolean>;
    /**
     * An optional identifier which links a custom InputAccessoryView to
     * this text input. The InputAccessoryView is rendered above the
     * keyboard when this text input is focused.
     * @platform ios
     */
    inputAccessoryViewID: PropTypes.Requireable<string>;
    /**
     * Give the keyboard and the system information about the
     * expected semantic meaning for the content that users enter.
     * @platform ios
     */
    textContentType: any;
    /**
     * When `false`, it will prevent the soft keyboard from showing when the field is focused.
     * Defaults to `true`.
     * @platform android
     */
    showSoftInputOnFocus: PropTypes.Requireable<boolean>;
    accessible: PropTypes.Requireable<boolean>;
    accessibilityLabel: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    accessibilityHint: PropTypes.Requireable<string>;
    accessibilityActions: any;
    accessibilityIgnoresInvertColors: PropTypes.Requireable<boolean>;
    accessibilityRole: any;
    accessibilityState: PropTypes.Requireable<object>;
    accessibilityValue: PropTypes.Requireable<object>;
    accessibilityLiveRegion: any;
    importantForAccessibility: any;
    accessibilityViewIsModal: PropTypes.Requireable<boolean>;
    accessibilityElementsHidden: PropTypes.Requireable<boolean>;
    onAccessibilityAction: PropTypes.Requireable<(...args: any[]) => any>;
    onAccessibilityTap: PropTypes.Requireable<(...args: any[]) => any>;
    onMagicTap: PropTypes.Requireable<(...args: any[]) => any>;
    testID: PropTypes.Requireable<string>;
    nativeID: PropTypes.Requireable<string>;
    onResponderGrant: PropTypes.Requireable<(...args: any[]) => any>;
    onResponderMove: PropTypes.Requireable<(...args: any[]) => any>;
    onResponderReject: PropTypes.Requireable<(...args: any[]) => any>;
    onResponderRelease: PropTypes.Requireable<(...args: any[]) => any>;
    onResponderTerminate: PropTypes.Requireable<(...args: any[]) => any>;
    onResponderTerminationRequest: PropTypes.Requireable<(...args: any[]) => any>;
    onStartShouldSetResponder: PropTypes.Requireable<(...args: any[]) => any>;
    onStartShouldSetResponderCapture: PropTypes.Requireable<(...args: any[]) => any>;
    onMoveShouldSetResponder: PropTypes.Requireable<(...args: any[]) => any>;
    onMoveShouldSetResponderCapture: PropTypes.Requireable<(...args: any[]) => any>;
    hitSlop: any;
    pointerEvents: any;
    removeClippedSubviews: PropTypes.Requireable<boolean>;
    renderToHardwareTextureAndroid: PropTypes.Requireable<boolean>;
    shouldRasterizeIOS: PropTypes.Requireable<boolean>;
    collapsable: PropTypes.Requireable<boolean>;
    needsOffscreenAlphaCompositing: PropTypes.Requireable<boolean>;
};
export default _default;
