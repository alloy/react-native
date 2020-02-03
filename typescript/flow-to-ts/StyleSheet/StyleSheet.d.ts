import { $Keys, $ElementType } from "utility-types";
import { ____DangerouslyImpreciseStyle_Internal, ____DangerouslyImpreciseStyleProp_Internal, ____ViewStyle_Internal, ____ViewStyleProp_Internal, ____TextStyle_Internal, ____TextStyleProp_Internal, ____ImageStyle_Internal, ____ImageStyleProp_Internal } from "./StyleSheetTypes";
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
