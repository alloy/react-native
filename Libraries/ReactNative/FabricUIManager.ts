'use strict';












import { MeasureOnSuccessCallback, MeasureInWindowOnSuccessCallback, MeasureLayoutOnSuccessCallback } from "../Renderer/shims/ReactNativeTypes";

// TODO: type these properly.
type Node = {};
type NodeSet = Array<Node>;
type NodeProps = {};
type InstanceHandle = {};
type Spec = {
  readonly createNode: (reactTag: number, viewName: string, rootTag: number, props: NodeProps, instanceHandle: InstanceHandle) => Node;
  readonly cloneNode: (node: Node) => Node;
  readonly cloneNodeWithNewChildren: (node: Node) => Node;
  readonly cloneNodeWithNewProps: (node: Node, newProps: NodeProps) => Node;
  readonly cloneNodeWithNewChildrenAndProps: (node: Node, newProps: NodeProps) => Node;
  readonly createChildSet: (rootTag: number) => NodeSet;
  readonly appendChild: (parentNode: Node, child: Node) => Node;
  readonly appendChildToSet: (childSet: NodeSet, child: Node) => void;
  readonly completeRoot: (rootTag: number, childSet: NodeSet) => void;
  readonly setNativeProps: (node: Node, nativeProps: NodeProps) => void;
  readonly measure: (node: Node, callback: MeasureOnSuccessCallback) => void;
  readonly measureInWindow: (node: Node, callback: MeasureInWindowOnSuccessCallback) => void;
  readonly measureLayout: (node: Node, relativeNode: Node, onFail: () => void, onSuccess: MeasureLayoutOnSuccessCallback) => void;
};

const FabricUIManager: Spec | null | undefined = global.nativeFabricUIManager;

module.exports = FabricUIManager;