/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */
'use strict';

import { Spec } from './NativeUIManager';
interface UIManagerJSInterface extends Spec {
  readonly getViewManagerConfig: (viewManagerName: string) => object;
  readonly createView: (reactTag: number | undefined | null, viewName: string, rootTag: number, props: object) => void;
  readonly updateView: (reactTag: number, viewName: string, props: object) => void;
  readonly manageChildren: (containerTag: number | undefined | null, moveFromIndices: Array<number>, moveToIndices: Array<number>, addChildReactTags: Array<number>, addAtIndices: Array<number>, removeAtIndices: Array<number>) => void;
}
const UIManager: UIManagerJSInterface = global.RN$Bridgeless === true ? require('./DummyUIManager') // No UIManager in bridgeless mode
: require('./PaperUIManager');
module.exports = UIManager;