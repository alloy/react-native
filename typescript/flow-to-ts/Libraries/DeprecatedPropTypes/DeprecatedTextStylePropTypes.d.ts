import ReactPropTypes from 'prop-types';
declare const DeprecatedTextStylePropTypes: {
    color: any;
    fontFamily: ReactPropTypes.Requireable<string>;
    fontSize: ReactPropTypes.Requireable<number>;
    fontStyle: any;
    /**
     * Specifies font weight. The values 'normal' and 'bold' are supported for
     * most fonts. Not all fonts have a variant for each of the numeric values,
     * in that case the closest one is chosen.
     */
    fontWeight: any;
    fontVariant: any;
    textShadowOffset: any;
    textShadowRadius: ReactPropTypes.Requireable<number>;
    textShadowColor: any;
    /**
     * @platform ios
     */
    letterSpacing: ReactPropTypes.Requireable<number>;
    lineHeight: ReactPropTypes.Requireable<number>;
    /**
     * Specifies text alignment. The value 'justify' is only supported on iOS and
     * fallbacks to `left` on Android.
     */
    textAlign: any;
    /**
     * @platform android
     */
    textAlignVertical: any;
    /**
     * Set to `false` to remove extra font padding intended to make space for certain ascenders / descenders.
     * With some fonts, this padding can make text look slightly misaligned when centered vertically.
     * For best results also set `textAlignVertical` to `center`. Default is true.
     * @platform android
     */
    includeFontPadding: ReactPropTypes.Requireable<boolean>;
    textDecorationLine: any;
    /**
     * @platform ios
     */
    textDecorationStyle: any;
    /**
     * @platform ios
     */
    textDecorationColor: any;
    textTransform: any;
    /**
     * @platform ios
     */
    writingDirection: any;
    backfaceVisibility: any;
    backgroundColor: any;
    borderColor: any;
    borderTopColor: any;
    borderRightColor: any;
    borderBottomColor: any;
    borderLeftColor: any;
    borderStartColor: any;
    borderEndColor: any;
    borderRadius: ReactPropTypes.Requireable<number>;
    borderTopLeftRadius: ReactPropTypes.Requireable<number>;
    borderTopRightRadius: ReactPropTypes.Requireable<number>;
    borderTopStartRadius: ReactPropTypes.Requireable<number>;
    borderTopEndRadius: ReactPropTypes.Requireable<number>;
    borderBottomLeftRadius: ReactPropTypes.Requireable<number>;
    borderBottomRightRadius: ReactPropTypes.Requireable<number>;
    borderBottomStartRadius: ReactPropTypes.Requireable<number>;
    borderBottomEndRadius: ReactPropTypes.Requireable<number>;
    borderStyle: any;
    borderWidth: ReactPropTypes.Requireable<number>; /**
     * Specifies text alignment. The value 'justify' is only supported on iOS and
     * fallbacks to `left` on Android.
     */
    borderTopWidth: ReactPropTypes.Requireable<number>;
    borderRightWidth: ReactPropTypes.Requireable<number>;
    borderBottomWidth: ReactPropTypes.Requireable<number>;
    borderLeftWidth: ReactPropTypes.Requireable<number>;
    opacity: ReactPropTypes.Requireable<number>;
    elevation: ReactPropTypes.Requireable<number>;
    transform: any;
    transformMatrix: (props: any, propName: string, componentName: string) => Error | null | undefined;
    decomposedMatrix: (props: any, propName: string, componentName: string) => Error | null | undefined;
    scaleX: any;
    scaleY: any;
    rotation: any;
    translateX: any;
    translateY: any;
    shadowColor: any;
    shadowOffset: any;
    shadowOpacity: ReactPropTypes.Requireable<number>;
    shadowRadius: ReactPropTypes.Requireable<number>;
    display: any;
    width: any;
    height: any;
    start: any;
    end: any;
    top: any;
    left: any;
    right: any;
    bottom: any;
    minWidth: any;
    maxWidth: any;
    minHeight: any;
    /**
     * Specifies text alignment. The value 'justify' is only supported on iOS and
     * fallbacks to `left` on Android.
     */
    maxHeight: any;
    margin: any;
    marginVertical: any;
    marginHorizontal: any;
    marginTop: any;
    marginBottom: any;
    marginLeft: any;
    marginRight: any;
    marginStart: any;
    marginEnd: any;
    padding: any;
    paddingVertical: any;
    paddingHorizontal: any;
    paddingTop: any;
    paddingBottom: any;
    paddingLeft: any;
    paddingRight: any;
    paddingStart: any;
    paddingEnd: any;
    borderStartWidth: ReactPropTypes.Requireable<number>;
    borderEndWidth: ReactPropTypes.Requireable<number>;
    position: any;
    flexDirection: any;
    flexWrap: any;
    justifyContent: any;
    alignItems: any;
    alignSelf: any;
    alignContent: any;
    overflow: any;
    flex: ReactPropTypes.Requireable<number>;
    flexGrow: ReactPropTypes.Requireable<number>;
    flexShrink: ReactPropTypes.Requireable<number>;
    flexBasis: any;
    aspectRatio: ReactPropTypes.Requireable<number>;
    zIndex: ReactPropTypes.Requireable<number>;
    direction: any;
};
export default DeprecatedTextStylePropTypes;
