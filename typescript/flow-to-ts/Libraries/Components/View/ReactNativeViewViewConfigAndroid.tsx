yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/View/ReactNativeViewViewConfigAndroid.js
'use strict';












const ReactNativeViewViewConfigAndroid = {
  uiViewClassName: 'RCTView',
  bubblingEventTypes: {
    topSelect: {
      phasedRegistrationNames: {
        bubbled: 'onSelect',
        captured: 'onSelectCapture'
      }
    }
  },
  directEventTypes: {
    topClick: {
      registrationName: 'onClick'
    },
    topContentSizeChange: {
      registrationName: 'onContentSizeChange'
    },
    topLoadingError: {
      registrationName: 'onLoadingError'
    },
    topLoadingFinish: {
      registrationName: 'onLoadingFinish'
    },
    topLoadingStart: {
      registrationName: 'onLoadingStart'
    },
    topMessage: {
      registrationName: 'onMessage'
    },
    topMomentumScrollBegin: {
      registrationName: 'onMomentumScrollBegin'
    },
    topMomentumScrollEnd: {
      registrationName: 'onMomentumScrollEnd'
    },
    topScroll: {
      registrationName: 'onScroll'
    },
    topScrollBeginDrag: {
      registrationName: 'onScrollBeginDrag'
    },
    topScrollEndDrag: {
      registrationName: 'onScrollEndDrag'
    },
    topSelectionChange: {
      registrationName: 'onSelectionChange'
    }
  },
  validAttributes: {
    hasTVPreferredFocus: true,
    focusable: true,
    nativeBackgroundAndroid: true,
    nativeForegroundAndroid: true,
    nextFocusDown: true,
    nextFocusForward: true,
    nextFocusLeft: true,
    nextFocusRight: true,
    nextFocusUp: true
  }
};

module.exports = ReactNativeViewViewConfigAndroid;
Done in 0.53s.
