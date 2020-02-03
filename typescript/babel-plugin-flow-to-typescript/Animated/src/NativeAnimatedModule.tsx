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

import { TurboModule } from '../../TurboModule/RCTExport';
import * as TurboModuleRegistry from '../../TurboModule/TurboModuleRegistry';
type EndResult = {
  finished: boolean;
};
type EndCallback = (result: EndResult) => void;
export type EventMapping = {
  nativeEventPath: Array<string>;
  animatedValueTag: number | undefined | null;
}; // The config has different keys depending on the type of the Node
// TODO(T54896888): Make these types strict

export type AnimatedNodeConfig = object;
export type AnimatingNodeConfig = object;
export interface Spec extends TurboModule {
  readonly createAnimatedNode: (tag: number, config: AnimatedNodeConfig) => void;
  readonly startListeningToAnimatedNodeValue: (tag: number) => void;
  readonly stopListeningToAnimatedNodeValue: (tag: number) => void;
  readonly connectAnimatedNodes: (parentTag: number, childTag: number) => void;
  readonly disconnectAnimatedNodes: (parentTag: number, childTag: number) => void;
  readonly startAnimatingNode: (animationId: number, nodeTag: number, config: AnimatingNodeConfig, endCallback: EndCallback) => void;
  readonly stopAnimation: (animationId: number) => void;
  readonly setAnimatedNodeValue: (nodeTag: number, value: number) => void;
  readonly setAnimatedNodeOffset: (nodeTag: number, offset: number) => void;
  readonly flattenAnimatedNodeOffset: (nodeTag: number) => void;
  readonly extractAnimatedNodeOffset: (nodeTag: number) => void;
  readonly connectAnimatedNodeToView: (nodeTag: number, viewTag: number) => void;
  readonly disconnectAnimatedNodeFromView: (nodeTag: number, viewTag: number) => void;
  readonly restoreDefaultValues: (nodeTag: number) => void;
  readonly dropAnimatedNode: (tag: number) => void;
  readonly addAnimatedEventToView: (viewTag: number, eventName: string, eventMapping: EventMapping) => void;
  readonly removeAnimatedEventFromView: (viewTag: number, eventName: string, animatedNodeTag: number) => void;
  // Events
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}
export default (TurboModuleRegistry.get<Spec>('NativeAnimatedModule') as Spec | undefined | null);