/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */
'use strict';

import { TurboModule } from '../TurboModule/RCTExport';
import * as TurboModuleRegistry from '../TurboModule/TurboModuleRegistry';
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