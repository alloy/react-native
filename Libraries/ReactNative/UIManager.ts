'use strict';












import { Spec } from "./NativeUIManager";

interface UIManagerJSInterface extends Spec {
  readonly getViewManagerConfig: (viewManagerName: string) => Object;
  readonly createView: (reactTag: number | null | undefined, viewName: string, rootTag: number, props: Object) => void;
  readonly updateView: (reactTag: number, viewName: string, props: Object) => void;
  readonly manageChildren: (containerTag: number | null | undefined, moveFromIndices: Array<number>, moveToIndices: Array<number>, addChildReactTags: Array<number>, addAtIndices: Array<number>, removeAtIndices: Array<number>) => void;
}

const UIManager: UIManagerJSInterface = global.RN$Bridgeless === true ? require('./DummyUIManager') // No UIManager in bridgeless mode
: require('./PaperUIManager');

module.exports = UIManager;