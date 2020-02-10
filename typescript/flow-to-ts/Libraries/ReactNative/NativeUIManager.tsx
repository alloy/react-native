'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: (() => any);
  readonly getConstantsForViewManager: ((viewManagerName: string) => any);
  readonly getDefaultEventTypes: (() => Array<string>);
  readonly playTouchSound: (() => void);
  readonly lazilyLoadView: ((name: string) => any);
  // revisit return
  readonly createView: ((reactTag: number | null | undefined, viewName: string, rootTag: number, props: any) => void);
  readonly updateView: ((reactTag: number, viewName: string, props: any) => void);
  readonly focus: ((reactTag: number | null | undefined) => void);
  readonly blur: ((reactTag: number | null | undefined) => void);
  readonly findSubviewIn: ((reactTag: number | null | undefined, point: Array<number>, callback: ((nativeViewTag: number, left: number, top: number, width: number, height: number) => void)) => void);
  readonly dispatchViewManagerCommand: ((reactTag: number | null | undefined, commandID: number, commandArgs: Array<any> | null | undefined) => void);
  readonly measure: ((reactTag: number | null | undefined, callback: ((left: number, top: number, width: number, height: number, pageX: number, pageY: number) => void)) => void);
  readonly measureInWindow: ((reactTag: number | null | undefined, callback: ((x: number, y: number, width: number, height: number) => void)) => void);
  readonly viewIsDescendantOf: ((reactTag: number | null | undefined, ancestorReactTag: number | null | undefined, callback: ((result: Array<boolean>) => void)) => void);
  readonly measureLayout: ((reactTag: number | null | undefined, ancestorReactTag: number | null | undefined, errorCallback: ((error: any) => void), callback: ((left: number, top: number, width: number, height: number) => void)) => void);
  readonly measureLayoutRelativeToParent: ((reactTag: number | null | undefined, errorCallback: ((error: any) => void), callback: ((left: number, top: number, width: number, height: number) => void)) => void);
  readonly setJSResponder: ((reactTag: number | null | undefined, blockNativeResponder: boolean) => void);
  readonly clearJSResponder: (() => void);
  readonly configureNextLayoutAnimation: ((config: any, callback: (() => void), // check what is returned here
  errorCallback: ((error: any) => void)) => void);
  readonly removeSubviewsFromContainerWithID: ((containerID: number) => void);
  readonly replaceExistingNonRootView: ((reactTag: number | null | undefined, newReactTag: number | null | undefined) => void);
  readonly setChildren: ((containerTag: number | null | undefined, reactTags: Array<number>) => void);
  readonly manageChildren: ((containerTag: number | null | undefined, moveFromIndices: Array<number>, moveToIndices: Array<number>, addChildReactTags: Array<number>, addAtIndices: Array<number>, removeAtIndices: Array<number>) => void);
  // Android only
  readonly setLayoutAnimationEnabledExperimental: ((enabled: boolean) => void);
  readonly sendAccessibilityEvent: ((reactTag: number | null | undefined, eventType: number) => void);
  readonly showPopupMenu: ((reactTag: number | null | undefined, items: Array<string>, error: ((error: any) => void), success: ((event: string, selected?: number) => void)) => void);
  readonly dismissPopupMenu: (() => void);
}

export default (TurboModuleRegistry.getEnforcing<Spec>('UIManager') as Spec);
