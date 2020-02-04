yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/ScrollView/ScrollViewViewConfig.js
'use strict';












import { GeneratedViewConfig } from "../../Utilities/registerGeneratedViewConfig";

const ScrollViewViewConfig = {
  uiViewClassName: 'RCTScrollView',
  bubblingEventTypes: {},
  directEventTypes: {
    topScrollToTop: {
      registrationName: 'onScrollToTop'
    }
  },
  validAttributes: {
    alwaysBounceHorizontal: true,
    alwaysBounceVertical: true,
    automaticallyAdjustContentInsets: true,
    bounces: true,
    bouncesZoom: true,
    canCancelContentTouches: true,
    centerContent: true,
    contentInset: { diff: require('../../Utilities/differ/pointsDiffer') },
    contentOffset: { diff: require('../../Utilities/differ/pointsDiffer') },
    contentInsetAdjustmentBehavior: true,
    decelerationRate: true,
    directionalLockEnabled: true,
    disableIntervalMomentum: true,
    endFillColor: { process: require('../../StyleSheet/processColor') },
    fadingEdgeLength: true,
    indicatorStyle: true,
    keyboardDismissMode: true,
    maintainVisibleContentPosition: true,
    maximumZoomScale: true,
    minimumZoomScale: true,
    nestedScrollEnabled: true,
    onMomentumScrollBegin: true,
    onMomentumScrollEnd: true,
    onScroll: true,
    onScrollBeginDrag: true,
    onScrollEndDrag: true,
    onScrollToTop: true,
    overScrollMode: true,
    pagingEnabled: true,
    persistentScrollbar: true,
    pinchGestureEnabled: true,
    scrollEnabled: true,
    scrollEventThrottle: true,
    scrollIndicatorInsets: {
      diff: require('../../Utilities/differ/pointsDiffer')
    },
    scrollPerfTag: true,
    scrollToOverflowEnabled: true,
    scrollsToTop: true,
    sendMomentumEvents: true,
    showsHorizontalScrollIndicator: true,
    showsVerticalScrollIndicator: true,
    snapToAlignment: true,
    snapToEnd: true,
    snapToInterval: true,
    snapToOffsets: true,
    snapToStart: true,
    zoomScale: true,

    DEPRECATED_sendUpdatedChildFrames: true
  }
};

module.exports = (ScrollViewViewConfig as GeneratedViewConfig);
Done in 0.47s.
