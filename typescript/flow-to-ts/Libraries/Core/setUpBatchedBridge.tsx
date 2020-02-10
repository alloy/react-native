'use strict';;
import BatchedBridge from '../BatchedBridge/BatchedBridge';
import _Import0 from '../Performance/Systrace';
import _Import1 from './Timers/JSTimers';
import _Import2 from '../HeapCapture/HeapCapture';
import _Import3 from '../Performance/SamplingProfiler';
import _Import4 from '../Utilities/RCTLog';
import _Import5 from '../EventEmitter/RCTDeviceEventEmitter';
import _Import6 from '../EventEmitter/RCTNativeAppEventEmitter';
import _Import7 from '../Utilities/GlobalPerformanceLogger';
import _Import8 from '../Utilities/JSDevSupportModule';
import _Import9 from '../Utilities/HMRClient';
import _Import10 from '../Utilities/HMRClientProdShim';












let registerModule;
if (global.RN$Bridgeless && global.RN$registerCallableModule) {
  registerModule = global.RN$registerCallableModule;
} else {
  registerModule = (moduleName, factory) => BatchedBridge.registerLazyCallableModule(moduleName, factory);
}

registerModule('Systrace', () => _Import0);
registerModule('JSTimers', () => _Import1);
registerModule('HeapCapture', () => _Import2);
registerModule('SamplingProfiler', () => _Import3);
registerModule('RCTLog', () => _Import4);
registerModule('RCTDeviceEventEmitter', () => _Import5);
registerModule('RCTNativeAppEventEmitter', () => _Import6);
registerModule('GlobalPerformanceLogger', () => _Import7);
registerModule('JSDevSupportModule', () => _Import8);

if (__DEV__ && !global.__RCTProfileIsProfiling) {
  registerModule('HMRClient', () => _Import9);
} else {
  registerModule('HMRClient', () => _Import10);
}
