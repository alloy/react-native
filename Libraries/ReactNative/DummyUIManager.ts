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
  getDefaultEventTypes: (): Array<$FlowFixMe> => [],
  playTouchSound: () => {},
  lazilyLoadView: (name: string) => {},
  createView: (reactTag: number | null | undefined, viewName: string, rootTag: number, props: Object) => {},
  updateView: (reactTag: number, viewName: string, props: Object) => {},
  focus: (reactTag: number | null | undefined) => {},
  blur: (reactTag: number | null | undefined) => {},
  findSubviewIn: (reactTag: number | null | undefined, point: Array<number>, callback: (nativeViewTag: number, left: number, top: number, width: number, height: number) => void) => {},
  dispatchViewManagerCommand: (reactTag: number | null | undefined, commandID: number, commandArgs: Array<string | number | boolean> | null | undefined) => {},
  measure: (reactTag: number | null | undefined, callback: (left: number, top: number, width: number, height: number, pageX: number, pageY: number) => void) => {},
  measureInWindow: (reactTag: number | null | undefined, callback: (x: number, y: number, width: number, height: number) => void) => {},
  viewIsDescendantOf: (reactTag: number | null | undefined, ancestorReactTag: number | null | undefined, callback: (result: Array<boolean>) => void) => {},
  measureLayout: (reactTag: number | null | undefined, ancestorReactTag: number | null | undefined, errorCallback: (error: Object) => void, callback: (left: number, top: number, width: number, height: number) => void) => {},
  measureLayoutRelativeToParent: (reactTag: number | null | undefined, errorCallback: (error: Object) => void, callback: (left: number, top: number, width: number, height: number) => void) => {},
  setJSResponder: (reactTag: number | null | undefined, blockNativeResponder: boolean) => {},
  clearJSResponder: () => {},
  configureNextLayoutAnimation: (config: Object, callback: () => void, errorCallback: (error: Object) => void) => {},
  removeSubviewsFromContainerWithID: (containerID: number) => {},
  replaceExistingNonRootView: (reactTag: number | null | undefined, newReactTag: number | null | undefined) => {},
  setChildren: (containerTag: number | null | undefined, reactTags: Array<number>) => {},
  manageChildren: (containerTag: number | null | undefined, moveFromIndices: Array<number>, moveToIndices: Array<number>, addChildReactTags: Array<number>, addAtIndices: Array<number>, removeAtIndices: Array<number>) => {},

  // Android only
  setLayoutAnimationEnabledExperimental: (enabled: boolean) => {},
  sendAccessibilityEvent: (reactTag: number | null | undefined, eventType: number) => {},
  showPopupMenu: (reactTag: number | null | undefined, items: Array<string>, error: (error: Object) => void, success: (event: string, selected?: number) => void) => {},
  dismissPopupMenu: () => {}
};