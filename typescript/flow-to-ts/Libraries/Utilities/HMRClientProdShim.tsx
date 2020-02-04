yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/HMRClientProdShim.js
'use strict';












import { HMRClientNativeInterface } from "./HMRClient";

// This shim ensures DEV binary builds don't crash in JS
// when they're combined with a PROD JavaScript build.
const HMRClientProdShim: HMRClientNativeInterface = {
  setup() {},
  enable() {
    console.error('Fast Refresh is disabled in JavaScript bundles built in production mode. ' + 'Did you forget to run Metro?');
  },
  disable() {},
  registerBundle() {},
  log() {}
};

module.exports = HMRClientProdShim;
Done in 0.51s.
