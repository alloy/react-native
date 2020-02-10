import ReactPropTypes from 'prop-types';
declare const ImageStylePropTypes: {
    resizeMode: any;
    backfaceVisibility: any;
    backgroundColor: any;
    borderColor: any;
    borderWidth: ReactPropTypes.Requireable<number>;
    borderRadius: ReactPropTypes.Requireable<number>;
    overflow: any;
    /**
     * Changes the color of all the non-transparent pixels to the tintColor.
     */
    tintColor: any;
    opacity: ReactPropTypes.Requireable<number>;
    /**
     * When the image has rounded corners, specifying an overlayColor will
     * cause the remaining space in the corners to be filled with a solid color.
     * This is useful in cases which are not supported by the Android
     * implementation of rounded corners:
     *   - Certain resize modes, such as 'contain'
     *   - Animated GIFs
     *
     * A typical way to use this prop is with images displayed on a solid
     * background and setting the `overlayColor` to the same color
     * as the background.
     *
     * For details of how this works under the hood, see
     * http://frescolib.org/docs/rounded-corners-and-circles.html
     *
     * @platform android
     */
    overlayColor: ReactPropTypes.Requireable<string>;
    borderTopLeftRadius: ReactPropTypes.Requireable<number>;
    borderTopRightRadius: ReactPropTypes.Requireable<number>;
    borderBottomLeftRadius: ReactPropTypes.Requireable<number>;
    borderBottomRightRadius: ReactPropTypes.Requireable<number>;
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
    borderTopWidth: ReactPropTypes.Requireable<number>;
    borderStartWidth: ReactPropTypes.Requireable<number>;
    borderEndWidth: ReactPropTypes.Requireable<number>;
    borderRightWidth: ReactPropTypes.Requireable<number>;
    borderBottomWidth: ReactPropTypes.Requireable<number>;
    borderLeftWidth: ReactPropTypes.Requireable<number>;
    position: any;
    flexDirection: any;
    flexWrap: any;
    justifyContent: any;
    alignItems: any;
    alignSelf: any;
    alignContent: any;
    flex: ReactPropTypes.Requireable<number>;
    flexGrow: ReactPropTypes.Requireable<number>;
    flexShrink: ReactPropTypes.Requireable<number>;
    flexBasis: any;
    aspectRatio: ReactPropTypes.Requireable<number>;
    zIndex: ReactPropTypes.Requireable<number>;
    direction: any;
};
export default ImageStylePropTypes;
