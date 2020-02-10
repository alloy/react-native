import { $ReadOnly } from "utility-types";
import { ImageURISource } from "./ImageSource";
declare type NativeImageSourceSpec = $ReadOnly<{
    android?: string;
    ios?: string;
    default?: string;
    height: number;
    width: number;
}>;
/**
 * In hybrid apps, use `nativeImageSource` to access images that are already
 * available on the native side, for example in Xcode Asset Catalogs or
 * Android's drawable folder.
 *
 * However, keep in mind that React Native Packager does not guarantee that the
 * image exists. If the image is missing you'll get an empty box. When adding
 * new images your app needs to be recompiled.
 *
 * Prefer Static Image Resources system which provides more guarantees,
 * automates measurements and allows adding new images without rebuilding the
 * native app. For more details visit:
 *
 *   http://facebook.github.io/react-native/docs/images.html
 *
 */
declare function nativeImageSource(spec: NativeImageSourceSpec): ImageURISource;
export default nativeImageSource;
