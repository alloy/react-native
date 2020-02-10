'use strict';;
import _Import0 from '../Utilities/differ/insetsDiffer';
import _Import1 from './resolveAssetSource';
import _Import2 from '../StyleSheet/processColor';
import _Import3 from '../StyleSheet/processColor';












import ReactNativeViewViewConfig from "../Components/View/ReactNativeViewViewConfig";
import { ReactNativeBaseComponentViewConfig } from "../Renderer/shims/ReactNativeTypes";

const ImageViewViewConfig = {
  uiViewClassName: 'RCTImageView',
  bubblingEventTypes: {},
  directEventTypes: {
    topLoadStart: {
      registrationName: 'onLoadStart'
    },
    topProgress: {
      registrationName: 'onProgress'
    },
    topError: {
      registrationName: 'onError'
    },
    topPartialLoad: {
      registrationName: 'onPartialLoad'
    },
    topLoad: {
      registrationName: 'onLoad'
    },
    topLoadEnd: {
      registrationName: 'onLoadEnd'
    }
  },
  validAttributes: {
    ...ReactNativeViewViewConfig.validAttributes,
    blurRadius: true,
    // flowlint-next-line unclear-type:off
    capInsets: { diff: (_Import0 as any) },
    defaultSource: {
      process: _Import1
    },
    defaultSrc: true,
    fadeDuration: true,
    headers: true,
    loadingIndicatorSrc: true,
    onError: true,
    onLoad: true,
    onLoadEnd: true,
    onLoadStart: true,
    onPartialLoad: true,
    onProgress: true,
    overlayColor: { process: _Import2 },
    progressiveRenderingEnabled: true,
    resizeMethod: true,
    resizeMode: true,
    shouldNotifyLoadEvents: true,
    source: true,
    src: true,
    tintColor: { process: _Import3 }
  }
};

export default ImageViewViewConfig as ReactNativeBaseComponentViewConfig<>;;
