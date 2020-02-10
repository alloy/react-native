import _Import0 from '../BatchedBridge/BatchedBridge.js';
import _Import1 from '../Core/ExceptionsManager';
import _Import2 from '../Utilities/Platform';
import _Import3 from '../EventEmitter/RCTEventEmitter';
import _Import4 from '../Renderer/shims/ReactNativeViewConfigRegistry';
import _Import5 from '../Components/TextInput/TextInputState';
import _Import6 from '../ReactNative/UIManager';
import _Import7 from '../Utilities/differ/deepDiffer';
import _Import8 from '../Utilities/deepFreezeAndThrowOnMutationInDev';
import _Import9 from '../StyleSheet/flattenStyle';
import _Import10 from '../Core/ReactFiberErrorDialog';
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

import BatchedBridge from "../BatchedBridge/BatchedBridge.js";
import ExceptionsManager from "../Core/ExceptionsManager";
import Platform from "../Utilities/Platform";
import RCTEventEmitter from "../EventEmitter/RCTEventEmitter";
import ReactNativeViewConfigRegistry from "../Renderer/shims/ReactNativeViewConfigRegistry";
import TextInputState from "../Components/TextInput/TextInputState";
import UIManager from "../ReactNative/UIManager";
import deepDiffer from "../Utilities/differ/deepDiffer";
import deepFreezeAndThrowOnMutationInDev from "../Utilities/deepFreezeAndThrowOnMutationInDev";
import flattenStyle from "../StyleSheet/flattenStyle";
import ReactFiberErrorDialog from "../Core/ReactFiberErrorDialog";

// flowlint unsafe-getters-setters:off
export default {
  get BatchedBridge(): BatchedBridge {
    return _Import0;
  },
  get ExceptionsManager(): ExceptionsManager {
    return _Import1;
  },
  get Platform(): Platform {
    return _Import2;
  },
  get RCTEventEmitter(): RCTEventEmitter {
    return _Import3;
  },
  get ReactNativeViewConfigRegistry(): ReactNativeViewConfigRegistry {
    return _Import4;
  },
  get TextInputState(): TextInputState {
    return _Import5;
  },
  get UIManager(): UIManager {
    return _Import6;
  },
  get deepDiffer(): deepDiffer {
    return _Import7;
  },
  get deepFreezeAndThrowOnMutationInDev(): deepFreezeAndThrowOnMutationInDev< // $FlowFixMe - can't properly parameterize the getter's type
  any> {
    return _Import8;
  },
  get flattenStyle(): flattenStyle {
    return _Import9;
  },
  get ReactFiberErrorDialog(): ReactFiberErrorDialog {
    return _Import10;
  }
};;
