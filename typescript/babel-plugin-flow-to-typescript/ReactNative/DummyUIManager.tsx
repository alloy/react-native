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

module.exports = {
  getViewManagerConfig: (viewManagerName: string): unknown => {
    console.warn('Attempting to get config for view manager: ' + viewManagerName);

    if (viewManagerName === 'RCTVirtualText') {
      return {};
    }

    return null;
  },
  getConstants: (): {} => ({}),
  getConstantsForViewManager: (viewManagerName: string) => {},
  getDefaultEventTypes: (): Array<any> => [],
  playTouchSound: () => {},
  lazilyLoadView: (name: string) => {},
  createView: (reactTag: number | undefined | null, viewName: string, rootTag: number, props: object) => {},
  updateView: (reactTag: number, viewName: string, props: object) => {},
  focus: (reactTag?: number | null) => {},
  blur: (reactTag?: number | null) => {},
  findSubviewIn: (reactTag: number | undefined | null, point: Array<number>, callback: (nativeViewTag: number, left: number, top: number, width: number, height: number) => void) => {},
  dispatchViewManagerCommand: (reactTag: number | undefined | null, commandID: number, commandArgs?: Array<string | number | boolean> | null) => {},
  measure: (reactTag: number | undefined | null, callback: (left: number, top: number, width: number, height: number, pageX: number, pageY: number) => void) => {},
  measureInWindow: (reactTag: number | undefined | null, callback: (x: number, y: number, width: number, height: number) => void) => {},
  viewIsDescendantOf: (reactTag: number | undefined | null, ancestorReactTag: number | undefined | null, callback: (result: Array<boolean>) => void) => {},
  measureLayout: (reactTag: number | undefined | null, ancestorReactTag: number | undefined | null, errorCallback: (error: object) => void, callback: (left: number, top: number, width: number, height: number) => void) => {},
  measureLayoutRelativeToParent: (reactTag: number | undefined | null, errorCallback: (error: object) => void, callback: (left: number, top: number, width: number, height: number) => void) => {},
  setJSResponder: (reactTag: number | undefined | null, blockNativeResponder: boolean) => {},
  clearJSResponder: () => {},
  configureNextLayoutAnimation: (config: object, callback: () => void, errorCallback: (error: object) => void) => {},
  removeSubviewsFromContainerWithID: (containerID: number) => {},
  replaceExistingNonRootView: (reactTag?: number | null, newReactTag?: number | null) => {},
  setChildren: (containerTag: number | undefined | null, reactTags: Array<number>) => {},
  manageChildren: (containerTag: number | undefined | null, moveFromIndices: Array<number>, moveToIndices: Array<number>, addChildReactTags: Array<number>, addAtIndices: Array<number>, removeAtIndices: Array<number>) => {},
  // Android only
  setLayoutAnimationEnabledExperimental: (enabled: boolean) => {},
  sendAccessibilityEvent: (reactTag: number | undefined | null, eventType: number) => {},
  showPopupMenu: (reactTag: number | undefined | null, items: Array<string>, error: (error: object) => void, success: (event: string, selected?: number) => void) => {},
  dismissPopupMenu: () => {}
};