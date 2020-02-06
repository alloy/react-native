'use strict';;
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

export default HMRClientProdShim;
