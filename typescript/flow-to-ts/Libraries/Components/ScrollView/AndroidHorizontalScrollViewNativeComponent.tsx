yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/ScrollView/AndroidHorizontalScrollViewNativeComponent.js
'use strict';












const registerGeneratedViewConfig = require('../../Utilities/registerGeneratedViewConfig');
const requireNativeComponent = require('../../ReactNative/requireNativeComponent');

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
Done in 0.50s.
