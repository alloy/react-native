yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/NativeDeviceInfo.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

type DisplayMetricsAndroid = {
  width: number;
  height: number;
  scale: number;
  fontScale: number;
  densityDpi: number;
};

export type DisplayMetrics = {
  width: number;
  height: number;
  scale: number;
  fontScale: number;
};

export type DimensionsPayload = {
  window?: DisplayMetrics;
  screen?: DisplayMetrics;
  windowPhysicalPixels?: DisplayMetricsAndroid;
  screenPhysicalPixels?: DisplayMetricsAndroid;
};

export interface Spec extends TurboModule {
  readonly getConstants: () => {
    readonly Dimensions: DimensionsPayload;
    readonly isIPhoneX_deprecated?: boolean;
  };
}

const NativeModule: Spec = TurboModuleRegistry.getEnforcing<Spec>('DeviceInfo');

const NativeDeviceInfo = NativeModule;

export default NativeDeviceInfo;
Done in 0.48s.
