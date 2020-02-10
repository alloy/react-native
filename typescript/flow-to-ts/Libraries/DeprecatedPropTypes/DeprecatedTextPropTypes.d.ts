import PropTypes from 'prop-types';
declare const _default: {
    /**
     * When `numberOfLines` is set, this prop defines how text will be
     * truncated.
     *
     * See https://facebook.github.io/react-native/docs/text.html#ellipsizemode
     */
    ellipsizeMode: any;
    /**
     * Used to truncate the text with an ellipsis.
     *
     * See https://facebook.github.io/react-native/docs/text.html#numberoflines
     */
    numberOfLines: PropTypes.Requireable<number>;
    /**
     * Set text break strategy on Android.
     *
     * See https://facebook.github.io/react-native/docs/text.html#textbreakstrategy
     */
    textBreakStrategy: any;
    /**
     * Invoked on mount and layout changes.
     *
     * See https://facebook.github.io/react-native/docs/text.html#onlayout
     */
    onLayout: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * This function is called on press.
     *
     * See https://facebook.github.io/react-native/docs/text.html#onpress
     */
    onPress: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * This function is called on long press.
     *
     * See https://facebook.github.io/react-native/docs/text.html#onlongpress
     */
    onLongPress: PropTypes.Requireable<(...args: any[]) => any>;
    /**
     * Defines how far your touch may move off of the button, before
     * deactivating the button.
     *
     * See https://facebook.github.io/react-native/docs/text.html#pressretentionoffset
     */
    pressRetentionOffset: any;
    /**
     * Lets the user select text.
     *
     * See https://facebook.github.io/react-native/docs/text.html#selectable
     */
    selectable: PropTypes.Requireable<boolean>;
    /**
     * The highlight color of the text.
     *
     * See https://facebook.github.io/react-native/docs/text.html#selectioncolor
     */
    selectionColor: any;
    /**
     * When `true`, no visual change is made when text is pressed down.
     *
     * See https://facebook.github.io/react-native/docs/text.html#supperhighlighting
     */
    suppressHighlighting: PropTypes.Requireable<boolean>;
    style: any;
    /**
     * Used to locate this view in end-to-end tests.
     *
     * See https://facebook.github.io/react-native/docs/text.html#testid
     */
    testID: PropTypes.Requireable<string>;
    /**
     * Used to locate this view from native code.
     *
     * See https://facebook.github.io/react-native/docs/text.html#nativeid
     */
    nativeID: PropTypes.Requireable<string>;
    /**
     * Whether fonts should scale to respect Text Size accessibility settings.
     *
     * See https://facebook.github.io/react-native/docs/text.html#allowfontscaling
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
     * Indicates whether the view is an accessibility element.
     *
     * See https://facebook.github.io/react-native/docs/text.html#accessible
     */
    accessible: PropTypes.Requireable<boolean>;
    /**
     * Whether font should be scaled down automatically.
     *
     * See https://facebook.github.io/react-native/docs/text.html#adjustsfontsizetofit
     */
    adjustsFontSizeToFit: PropTypes.Requireable<boolean>;
    /**
     * Smallest possible scale a font can reach.
     *
     * See https://facebook.github.io/react-native/docs/text.html#minimumfontscale
     */
    minimumFontScale: PropTypes.Requireable<number>;
    /**
     * Specifies the disabled state of the text view for testing purposes.
     *
     * See https://facebook.github.io/react-native/docs/text.html#disabled
     */
    disabled: PropTypes.Requireable<boolean>;
    /**
     * Determines the types of data converted to clickable URLs in text.
     *
     * See https://facebook.github.io/react-native/docs/text.html#dataDetectorType
     */
    dataDetectorType: any;
};
export default _default;
