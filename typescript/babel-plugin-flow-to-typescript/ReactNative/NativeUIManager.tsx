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

import { TurboModule } from '../TurboModule/RCTExport';
import * as TurboModuleRegistry from '../TurboModule/TurboModuleRegistry';
export interface Spec extends TurboModule {
  readonly getConstants: () => object;
  readonly getConstantsForViewManager: (viewManagerName: string) => object;
  readonly getDefaultEventTypes: () => Array<string>;
  readonly playTouchSound: () => void;
  readonly lazilyLoadView: (name: string) => object;
  // revisit return
  readonly createView: (reactTag: number | undefined | null, viewName: string, rootTag: number, props: object) => void;
  readonly updateView: (reactTag: number, viewName: string, props: object) => void;
  readonly focus: (reactTag?: number | null) => void;
  readonly blur: (reactTag?: number | null) => void;
  readonly findSubviewIn: (reactTag: number | undefined | null, point: Array<number>, callback: (nativeViewTag: number, left: number, top: number, width: number, height: number) => void) => void;
  readonly dispatchViewManagerCommand: (reactTag: number | undefined | null, commandID: number, commandArgs?: Array<any> | null) => void;
  readonly measure: (reactTag: number | undefined | null, callback: (left: number, top: number, width: number, height: number, pageX: number, pageY: number) => void) => void;
  readonly measureInWindow: (reactTag: number | undefined | null, callback: (x: number, y: number, width: number, height: number) => void) => void;
  readonly viewIsDescendantOf: (reactTag: number | undefined | null, ancestorReactTag: number | undefined | null, callback: (result: Array<boolean>) => void) => void;
  readonly measureLayout: (reactTag: number | undefined | null, ancestorReactTag: number | undefined | null, errorCallback: (error: object) => void, callback: (left: number, top: number, width: number, height: number) => void) => void;
  readonly measureLayoutRelativeToParent: (reactTag: number | undefined | null, errorCallback: (error: object) => void, callback: (left: number, top: number, width: number, height: number) => void) => void;
  readonly setJSResponder: (reactTag: number | undefined | null, blockNativeResponder: boolean) => void;
  readonly clearJSResponder: () => void;
  readonly configureNextLayoutAnimation: (config: object, callback: () => void, // check what is returned here
  errorCallback: (error: object) => void) => void;
  readonly removeSubviewsFromContainerWithID: (containerID: number) => void;
  readonly replaceExistingNonRootView: (reactTag?: number | null, newReactTag?: number | null) => void;
  readonly setChildren: (containerTag: number | undefined | null, reactTags: Array<number>) => void;
  readonly manageChildren: (containerTag: number | undefined | null, moveFromIndices: Array<number>, moveToIndices: Array<number>, addChildReactTags: Array<number>, addAtIndices: Array<number>, removeAtIndices: Array<number>) => void;
  // Android only
  readonly setLayoutAnimationEnabledExperimental: (enabled: boolean) => void;
  readonly sendAccessibilityEvent: (reactTag: number | undefined | null, eventType: number) => void;
  readonly showPopupMenu: (reactTag: number | undefined | null, items: Array<string>, error: (error: object) => void, success: (event: string, selected?: number) => void) => void;
  readonly dismissPopupMenu: () => void;
}
export default (TurboModuleRegistry.getEnforcing<Spec>('UIManager') as Spec);