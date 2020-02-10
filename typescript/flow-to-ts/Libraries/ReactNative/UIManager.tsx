'use strict';;
import _Import0 from './DummyUIManager';
import _Import1 from './PaperUIManager';












import { Spec } from "./NativeUIManager";

interface UIManagerJSInterface extends Spec {
  readonly getViewManagerConfig: ((viewManagerName: string) => any);
  readonly createView: ((reactTag: number | null | undefined, viewName: string, rootTag: number, props: any) => void);
  readonly updateView: ((reactTag: number, viewName: string, props: any) => void);
  readonly manageChildren: ((containerTag: number | null | undefined, moveFromIndices: Array<number>, moveToIndices: Array<number>, addChildReactTags: Array<number>, addAtIndices: Array<number>, removeAtIndices: Array<number>) => void);
}

const UIManager: UIManagerJSInterface = global.RN$Bridgeless === true ? _Import0
: _Import1;

export default UIManager;;
