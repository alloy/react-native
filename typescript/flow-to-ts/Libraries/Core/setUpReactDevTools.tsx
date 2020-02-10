'use strict';;
import reactDevTools from 'react-devtools-core';
import AppState from '../AppState/AppState';
import getDevServer from './Devtools/getDevServer';
import WebSocket from '../WebSocket/WebSocket';
import viewConfig from '../Components/View/ReactNativeViewViewConfig.js';
import _Import0 from '../StyleSheet/flattenStyle';
import RCTNativeAppEventEmitter from '../EventEmitter/RCTNativeAppEventEmitter';












if (__DEV__) {
  const connectToDevTools = () => {
    // not when debugging in chrome
    // TODO(t12832058) This check is broken
    if (!window.document) {
      // Don't steal the DevTools from currently active app.
      // Note: if you add any AppState subscriptions to this file,
      // you will also need to guard against `AppState.isAvailable`,
      // or the code will throw for bundles that don't have it.
      const isAppActive = () => AppState.currentState !== 'background';

      // Get hostname from development server (packager)
      const devServer = getDevServer();
      const host = devServer.bundleLoadedFromServer ? devServer.url.replace(/https?:\/\//, '').split(':')[0] : 'localhost';

      // Read the optional global variable for backward compatibility.
      // It was added in https://github.com/facebook/react-native/commit/bf2b435322e89d0aeee8792b1c6e04656c2719a0.
      const port = window.__REACT_DEVTOOLS_PORT__ != null ? window.__REACT_DEVTOOLS_PORT__ : 8097;

      const ws = new WebSocket('ws://' + host + ':' + port);

      reactDevTools.connectToDevTools({
        isAppActive,
        resolveRNStyle: _Import0,
        nativeStyleEditorValidAttributes: Object.keys(viewConfig.validAttributes.style),
        websocket: ws
      });
    }
  };

  RCTNativeAppEventEmitter.addListener('RCTDevMenuShown', connectToDevTools);
  connectToDevTools(); // Try connecting once on load
}
