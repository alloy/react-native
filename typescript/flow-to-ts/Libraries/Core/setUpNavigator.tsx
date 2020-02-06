'use strict';;
import _Import0 from '../Utilities/PolyfillFunctions';

const {
  polyfillObjectProperty
} = _Import0;

let navigator = global.navigator;
if (navigator === undefined) {
  global.navigator = navigator = {};
}

// see https://github.com/facebook/react-native/issues/10881
polyfillObjectProperty(navigator, 'product', () => 'ReactNative');
