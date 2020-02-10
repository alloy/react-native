'use strict';;
import DeprecatedImagePropType from '../DeprecatedPropTypes/DeprecatedImagePropType';
import React from 'react';
import ReactNative from '../Renderer/shims/ReactNative';
import StyleSheet from '../StyleSheet/StyleSheet';
import flattenStyle from '../StyleSheet/flattenStyle';
import resolveAssetSource from './resolveAssetSource';
import { $ReadOnly } from "utility-types";












import { ImageProps as ImagePropsType } from "./ImageProps";

import { ImageStyleProp } from "../StyleSheet/StyleSheet";
import NativeImageLoaderIOS from "./NativeImageLoaderIOS";

import ImageViewNativeComponent from "./ImageViewNativeComponent";

function getSize(uri: string, success: ((width: number, height: number) => void), failure?: ((error: any) => void)) {
  NativeImageLoaderIOS.getSize(uri).then(([width, height]) => success(width, height)).catch(failure || function () {
    console.warn('Failed to get size for image ' + uri);
  });
}

function getSizeWithHeaders(uri: string, headers: {
  [key: string]: string;
}, success: ((width: number, height: number) => void), failure?: ((error: any) => void)): any {
  return null as any;
}

function prefetch(url: string): any {
  return null as any;
}

async function queryCache(urls: Array<string>): Promise<{
  [key: string]: "memory" | "disk" | "disk/memory";
}> {
  return null as any;
}

type ImageComponentStatics = $ReadOnly<{
  getSize: typeof getSize;
  getSizeWithHeaders: typeof getSizeWithHeaders;
  prefetch: typeof prefetch;
  queryCache: typeof queryCache;
  resolveAssetSource: typeof resolveAssetSource;
  propTypes: typeof DeprecatedImagePropType;
}>;

/**
 * A React component for displaying different types of images,
 * including network images, static resources, temporary local images, and
 * images from local disk, such as the camera roll.
 *
 * See https://facebook.github.io/react-native/docs/image.html
 */
let Image = (props: ImagePropsType, forwardedRef) => {
  const source = resolveAssetSource(props.source) || {
    uri: undefined,
    width: undefined,
    height: undefined
  };

  let sources;
  let style: ImageStyleProp;
  if (Array.isArray(source)) {
    // $FlowFixMe flattenStyle is not strong enough
    style = flattenStyle([styles.base, props.style]) || {};
    sources = source;
  } else {
    const {
      width,
      height,
      uri
    } = source;
    // $FlowFixMe flattenStyle is not strong enough
    style = flattenStyle([{ width, height }, styles.base, props.style]) || {};
    sources = [source];

    if (uri === '') {
      console.warn('source.uri should not be an empty string');
    }
  }

  const resizeMode = props.resizeMode || style.resizeMode || 'cover';
  const tintColor = style.tintColor;

  if (props.src != null) {
    console.warn('The <Image> component requires a `source` property rather than `src`.');
  }

  if (props.children != null) {
    throw new Error('The <Image> component cannot contain children. If you want to render content on top of the image, consider using the <ImageBackground> component or absolute positioning.');
  }

  return <ImageViewNativeComponent {...props} ref={forwardedRef} style={style} resizeMode={resizeMode} tintColor={tintColor} source={sources} />;
};

Image = React.forwardRef<ImagePropsType, React.ElementRef<typeof ImageViewNativeComponent>>(Image);
Image.displayName = 'Image';

/**
 * Retrieve the width and height (in pixels) of an image prior to displaying it.
 *
 * See https://facebook.github.io/react-native/docs/image.html#getsize
 */
Image.getSize = getSize;

/**
 * Retrieve the width and height (in pixels) of an image prior to displaying it
 * with the ability to provide the headers for the request.
 *
 * See https://facebook.github.io/react-native/docs/image.html#getsizewithheaders
 */
Image.getSizeWithHeaders = getSizeWithHeaders;

/**
 * Prefetches a remote image for later use by downloading it to the disk
 * cache.
 *
 * See https://facebook.github.io/react-native/docs/image.html#prefetch
 */
Image.prefetch = prefetch;

/**
 * Performs cache interrogation.
 *
 *  See https://facebook.github.io/react-native/docs/image.html#querycache
 */
Image.queryCache = queryCache;

/**
 * Resolves an asset reference into an object.
 *
 * See https://facebook.github.io/react-native/docs/image.html#resolveassetsource
 */
Image.resolveAssetSource = resolveAssetSource;




Image.propTypes = DeprecatedImagePropType;

const styles = StyleSheet.create({
  base: {
    overflow: 'hidden'
  }
});

export default (Image as any) as React.AbstractComponent<ImagePropsType, React.ElementRef<typeof ImageViewNativeComponent>> & ImageComponentStatics;;
