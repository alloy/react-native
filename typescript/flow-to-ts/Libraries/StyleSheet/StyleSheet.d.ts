import flatten from './flattenStyle';
import { $Keys, $ElementType } from "utility-types";
import { ____Styles_Internal, ____DangerouslyImpreciseStyle_Internal, ____DangerouslyImpreciseStyleProp_Internal, ____ViewStyle_Internal, ____ViewStyleProp_Internal, ____TextStyle_Internal, ____TextStyleProp_Internal, ____ImageStyle_Internal, ____ImageStyleProp_Internal } from "./StyleSheetTypes";
/**
 * This type should be used as the type for a prop that is passed through
 * to a <View>'s `style` prop. This ensures call sites of the component
 * can't pass styles that View doesn't support such as `fontSize`.`
 *
 * type Props = {style: ViewStyleProp}
 * const MyComponent = (props: Props) => <View style={props.style} />
 */
export declare type ViewStyleProp = ____ViewStyleProp_Internal;
/**
 * This type should be used as the type for a prop that is passed through
 * to a <Text>'s `style` prop. This ensures call sites of the component
 * can't pass styles that Text doesn't support such as `resizeMode`.`
 *
 * type Props = {style: TextStyleProp}
 * const MyComponent = (props: Props) => <Text style={props.style} />
 */
export declare type TextStyleProp = ____TextStyleProp_Internal;
/**
 * This type should be used as the type for a prop that is passed through
 * to an <Image>'s `style` prop. This ensures call sites of the component
 * can't pass styles that Image doesn't support such as `fontSize`.`
 *
 * type Props = {style: ImageStyleProp}
 * const MyComponent = (props: Props) => <Image style={props.style} />
 */
export declare type ImageStyleProp = ____ImageStyleProp_Internal;
/**
 * WARNING: You probably shouldn't be using this type. This type
 * is similar to the ones above except it allows styles that are accepted
 * by all of View, Text, or Image. It is therefore very unsafe to pass this
 * through to an underlying component. Using this is almost always a mistake
 * and using one of the other more restrictive types is likely the right choice.
 */
export declare type DangerouslyImpreciseStyleProp = ____DangerouslyImpreciseStyleProp_Internal;
/**
 * Utility type for getting the values for specific style keys.
 *
 * The following is bad because position is more restrictive than 'string':
 * ```
 * type Props = {position: string};
 * ```
 *
 * You should use the following instead:
 *
 * ```
 * type Props = {position: TypeForStyleKey<'position'>};
 * ```
 *
 * This will correctly give you the type 'absolute' | 'relative'
 */
export declare type TypeForStyleKey<key extends $Keys<____DangerouslyImpreciseStyle_Internal>> = $ElementType<____DangerouslyImpreciseStyle_Internal, key>;
/**
 * This type is an object of the different possible style
 * properties that can be specified for View.
 *
 * Note that this isn't a safe way to type a style prop for a component as
 * results from StyleSheet.create return an internal identifier, not
 * an object of styles.
 *
 * If you want to type the style prop of a function,
 * consider using ViewStyleProp.
 *
 * A reasonable usage of this type is for helper functions that return an
 * object of styles to pass to a View that can't be precomputed with
 * StyleSheet.create.
 */
export declare type ViewStyle = ____ViewStyle_Internal;
/**
 * This type is an object of the different possible style
 * properties that can be specified for Text.
 *
 * Note that this isn't a safe way to type a style prop for a component as
 * results from StyleSheet.create return an internal identifier, not
 * an object of styles.
 *
 * If you want to type the style prop of a function,
 * consider using TextStyleProp.
 *
 * A reasonable usage of this type is for helper functions that return an
 * object of styles to pass to a Text that can't be precomputed with
 * StyleSheet.create.
 */
export declare type TextStyle = ____TextStyle_Internal;
/**
 * This type is an object of the different possible style
 * properties that can be specified for Image.
 *
 * Note that this isn't a safe way to type a style prop for a component as
 * results from StyleSheet.create return an internal identifier, not
 * an object of styles.
 *
 * If you want to type the style prop of a function,
 * consider using ImageStyleProp.
 *
 * A reasonable usage of this type is for helper functions that return an
 * object of styles to pass to an Image that can't be precomputed with
 * StyleSheet.create.
 */
export declare type ImageStyle = ____ImageStyle_Internal;
/**
 * WARNING: You probably shouldn't be using this type. This type is an object
 * with all possible style keys and their values. Note that this isn't
 * a safe way to type a style prop for a component as results from
 * StyleSheet.create return an internal identifier, not an object of styles.
 *
 * If you want to type the style prop of a function, consider using
 * ViewStyleProp, TextStyleProp, or ImageStyleProp.
 *
 * This should only be used by very core utilities that operate on an object
 * containing any possible style value.
 */
export declare type DangerouslyImpreciseStyle = ____DangerouslyImpreciseStyle_Internal;
declare const _default: {
    /**
     * This is defined as the width of a thin line on the platform. It can be
     * used as the thickness of a border or division between two elements.
     * Example:
     * ```
     *   {
     *     borderBottomColor: '#bbb',
     *     borderBottomWidth: StyleSheet.hairlineWidth
     *   }
     * ```
     *
     * This constant will always be a round number of pixels (so a line defined
     * by it look crisp) and will try to match the standard width of a thin line
     * on the underlying platform. However, you should not rely on it being a
     * constant size, because on different platforms and screen densities its
     * value may be calculated differently.
     *
     * A line with hairline width may not be visible if your simulator is downscaled.
     */
    hairlineWidth: number;
    /**
     * A very common pattern is to create overlays with position absolute and zero positioning,
     * so `absoluteFill` can be used for convenience and to reduce duplication of these repeated
     * styles.
     */
    absoluteFill: any;
    /**
     * Sometimes you may want `absoluteFill` but with a couple tweaks - `absoluteFillObject` can be
     * used to create a customized entry in a `StyleSheet`, e.g.:
     *
     *   const styles = StyleSheet.create({
     *     wrapper: {
     *       ...StyleSheet.absoluteFillObject,
     *       top: 10,
     *       backgroundColor: 'transparent',
     *     },
     *   });
     */
    absoluteFillObject: {
        position: string;
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
    /**
     * Combines two styles such that `style2` will override any styles in `style1`.
     * If either style is falsy, the other one is returned without allocating an
     * array, saving allocations and maintaining reference equality for
     * PureComponent checks.
     */
    compose<T extends false | void | "" | Partial<any> | readonly (false | void | "" | Partial<any> | readonly (false | void | "" | Partial<any> | readonly (false | void | "" | Partial<any> | readonly (false | void | "" | Partial<any> | readonly (false | void | "" | Partial<any> | readonly (false | void | "" | Partial<any> | readonly (false | void | "" | Partial<any> | readonly (false | void | "" | Partial<any> | readonly (false | void | "" | Partial<any> | readonly (false | void | "" | Partial<any> | readonly (false | void | "" | Partial<any> | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null>(style1: T | null | undefined, style2: T | null | undefined): T | readonly T[] | null | undefined;
    /**
     * Flattens an array of style objects, into one aggregated style object.
     * Alternatively, this method can be used to lookup IDs, returned by
     * StyleSheet.register.
     *
     * > **NOTE**: Exercise caution as abusing this can tax you in terms of
     * > optimizations.
     * >
     * > IDs enable optimizations through the bridge and memory in general. Referring
     * > to style objects directly will deprive you of these optimizations.
     *
     * Example:
     * ```
     * const styles = StyleSheet.create({
     *   listItem: {
     *     flex: 1,
     *     fontSize: 16,
     *     color: 'white'
     *   },
     *   selectedListItem: {
     *     color: 'green'
     *   }
     * });
     *
     * StyleSheet.flatten([styles.listItem, styles.selectedListItem])
     * // returns { flex: 1, fontSize: 16, color: 'green' }
     * ```
     * Alternative use:
     * ```
     * StyleSheet.flatten(styles.listItem);
     * // return { flex: 1, fontSize: 16, color: 'white' }
     * // Simply styles.listItem would return its ID (number)
     * ```
     * This method internally uses `StyleSheetRegistry.getStyleByID(style)`
     * to resolve style objects represented by IDs. Thus, an array of style
     * objects (instances of StyleSheet.create), are individually resolved to,
     * their respective objects, merged as one and then returned. This also explains
     * the alternative use.
     */
    flatten: typeof flatten;
    /**
     * WARNING: EXPERIMENTAL. Breaking changes will probably happen a lot and will
     * not be reliably announced. The whole thing might be deleted, who knows? Use
     * at your own risk.
     *
     * Sets a function to use to pre-process a style property value. This is used
     * internally to process color and transform values. You should not use this
     * unless you really know what you are doing and have exhausted other options.
     */
    setStyleAttributePreprocessor(property: string, process: (nextProp: unknown) => unknown): void;
    /**
     * Creates a StyleSheet style reference from the given object.
     */
    create<S extends ____Styles_Internal>(obj: S): import("utility-types").DeepReadonly<S>;
};
/**
 * A StyleSheet is an abstraction similar to CSS StyleSheets
 *
 * Create a new StyleSheet:
 *
 * ```
 * const styles = StyleSheet.create({
 *   container: {
 *     borderRadius: 4,
 *     borderWidth: 0.5,
 *     borderColor: '#d6d7da',
 *   },
 *   title: {
 *     fontSize: 19,
 *     fontWeight: 'bold',
 *   },
 *   activeTitle: {
 *     color: 'red',
 *   },
 * });
 * ```
 *
 * Use a StyleSheet:
 *
 * ```
 * <View style={styles.container}>
 *   <Text style={[styles.title, this.props.isActive && styles.activeTitle]} />
 * </View>
 * ```
 *
 * Code quality:
 *
 *  - By moving styles away from the render function, you're making the code
 *  easier to understand.
 *  - Naming the styles is a good way to add meaning to the low level components
 *  in the render function.
 *
 * Performance:
 *
 *  - Making a stylesheet from a style object makes it possible to refer to it
 * by ID instead of creating a new style object every time.
 *  - It also allows to send the style only once through the bridge. All
 * subsequent uses are going to refer an id (not implemented yet).
 */
export default _default;
