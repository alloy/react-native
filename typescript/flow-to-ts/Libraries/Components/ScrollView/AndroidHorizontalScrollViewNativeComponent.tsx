'use strict';;
import registerGeneratedViewConfig from '../../Utilities/registerGeneratedViewConfig';
import requireNativeComponent from '../../ReactNative/requireNativeComponent';

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ScrollViewNativeProps } from "./ScrollViewNativeComponentType";

const AndroidHorizontalScrollViewViewConfig = {
  uiViewClassName: 'AndroidHorizontalScrollView',
  bubblingEventTypes: {},
  directEventTypes: {},
  validAttributes: {
    decelerationRate: true,
    disableIntervalMomentum: true,
    endFillColor: { process: require('../../StyleSheet/processColor') },
    fadingEdgeLength: true,
    nestedScrollEnabled: true,
    overScrollMode: true,
    pagingEnabled: true,
    persistentScrollbar: true,
    scrollEnabled: true,
    scrollPerfTag: true,
    sendMomentumEvents: true,
    showsHorizontalScrollIndicator: true,
    snapToEnd: true,
    snapToInterval: true,
    snapToStart: true,
    snapToOffsets: true
  }
};

let AndroidHorizontalScrollViewNativeComponent;
if (global.RN$Bridgeless) {
  registerGeneratedViewConfig('AndroidHorizontalScrollView', AndroidHorizontalScrollViewViewConfig);
  AndroidHorizontalScrollViewNativeComponent = 'AndroidHorizontalScrollView';
} else {
  AndroidHorizontalScrollViewNativeComponent = requireNativeComponent<ScrollViewNativeProps>('AndroidHorizontalScrollView');
}

export default ((AndroidHorizontalScrollViewNativeComponent as any) as HostComponent<ScrollViewNativeProps>);
