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
module.exports = {
  get BatchedBridge(): BatchedBridge {
    return require('../BatchedBridge/BatchedBridge.js');
  },
  get ExceptionsManager(): ExceptionsManager {
    return require('../Core/ExceptionsManager');
  },
  get Platform(): Platform {
    return require('../Utilities/Platform');
  },
  get RCTEventEmitter(): RCTEventEmitter {
    return require('../EventEmitter/RCTEventEmitter');
  },
  get ReactNativeViewConfigRegistry(): ReactNativeViewConfigRegistry {
    return require('../Renderer/shims/ReactNativeViewConfigRegistry');
  },
  get TextInputState(): TextInputState {
    return require('../Components/TextInput/TextInputState');
  },
  get UIManager(): UIManager {
    return require('../ReactNative/UIManager');
  },
  get deepDiffer(): deepDiffer {
    return require('../Utilities/differ/deepDiffer');
  },
  get deepFreezeAndThrowOnMutationInDev(): deepFreezeAndThrowOnMutationInDev< // $FlowFixMe - can't properly parameterize the getter's type
  any> {
    return require('../Utilities/deepFreezeAndThrowOnMutationInDev');
  },
  get flattenStyle(): flattenStyle {
    return require('../StyleSheet/flattenStyle');
  },
  get ReactFiberErrorDialog(): ReactFiberErrorDialog {
    return require('../Core/ReactFiberErrorDialog');
  }
};
