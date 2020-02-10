'use strict';












import NativeEventEmitter from "../../EventEmitter/NativeEventEmitter";
import { EventConfig } from "./AnimatedEvent";
import NativeAnimatedModule from "./NativeAnimatedModule";
import { EventMapping, AnimatedNodeConfig, AnimatingNodeConfig } from "./NativeAnimatedModule";
import { AnimationConfig, EndCallback } from "./animations/Animation";
import { InterpolationConfigType } from "./nodes/AnimatedInterpolation";
import invariant from "invariant";

let __nativeAnimatedNodeTagCount = 1;
/* used for animated nodes */
let __nativeAnimationIdCount = 1;
/* used for started animations */

let nativeEventEmitter;

let queueConnections = false;
let queue = [];

/**
 * Simple wrappers around NativeAnimatedModule to provide flow and autocomplete support for
 * the native module methods
 */
const API = {
  enableQueue: function (): void {
    queueConnections = true;
  },
  disableQueue: function (): void {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    queueConnections = false;
    for (let q = 0, l = queue.length; q < l; q++) {
      const args = queue[q];
      NativeAnimatedModule.connectAnimatedNodes(args[0], args[1]);
    }
    queue.length = 0;
  },
  createAnimatedNode: function (tag: number, config: AnimatedNodeConfig): void {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.createAnimatedNode(tag, config);
  },
  startListeningToAnimatedNodeValue: function (tag: number) {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.startListeningToAnimatedNodeValue(tag);
  },
  stopListeningToAnimatedNodeValue: function (tag: number) {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.stopListeningToAnimatedNodeValue(tag);
  },
  connectAnimatedNodes: function (parentTag: number, childTag: number): void {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    if (queueConnections) {
      queue.push([parentTag, childTag]);
      return;
    }
    NativeAnimatedModule.connectAnimatedNodes(parentTag, childTag);
  },
  disconnectAnimatedNodes: function (parentTag: number, childTag: number): void {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.disconnectAnimatedNodes(parentTag, childTag);
  },
  startAnimatingNode: function (animationId: number, nodeTag: number, config: AnimatingNodeConfig, endCallback: EndCallback): void {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.startAnimatingNode(animationId, nodeTag, config, endCallback);
  },
  stopAnimation: function (animationId: number) {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.stopAnimation(animationId);
  },
  setAnimatedNodeValue: function (nodeTag: number, value: number): void {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.setAnimatedNodeValue(nodeTag, value);
  },
  setAnimatedNodeOffset: function (nodeTag: number, offset: number): void {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.setAnimatedNodeOffset(nodeTag, offset);
  },
  flattenAnimatedNodeOffset: function (nodeTag: number): void {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.flattenAnimatedNodeOffset(nodeTag);
  },
  extractAnimatedNodeOffset: function (nodeTag: number): void {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.extractAnimatedNodeOffset(nodeTag);
  },
  connectAnimatedNodeToView: function (nodeTag: number, viewTag: number): void {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.connectAnimatedNodeToView(nodeTag, viewTag);
  },
  disconnectAnimatedNodeFromView: function (nodeTag: number, viewTag: number): void {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.disconnectAnimatedNodeFromView(nodeTag, viewTag);
  },
  restoreDefaultValues: function (nodeTag: number): void {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    // Backwards compat with older native runtimes, can be removed later.
    if (NativeAnimatedModule.restoreDefaultValues != null) {
      NativeAnimatedModule.restoreDefaultValues(nodeTag);
    }
  },
  dropAnimatedNode: function (tag: number): void {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.dropAnimatedNode(tag);
  },
  addAnimatedEventToView: function (viewTag: number, eventName: string, eventMapping: EventMapping) {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.addAnimatedEventToView(viewTag, eventName, eventMapping);
  },
  removeAnimatedEventFromView(viewTag: number, eventName: string, animatedNodeTag: number) {
    invariant(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.removeAnimatedEventFromView(viewTag, eventName, animatedNodeTag);
  }
};

/**
 * Styles allowed by the native animated implementation.
 *
 * In general native animated implementation should support any numeric property that doesn't need
 * to be updated through the shadow view hierarchy (all non-layout properties).
 */
const STYLES_WHITELIST = {
  opacity: true,
  transform: true,
  borderRadius: true,
  borderBottomEndRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomStartRadius: true,
  borderTopEndRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderTopStartRadius: true,
  elevation: true,
  zIndex: true,

  /* ios styles */
  shadowOpacity: true,
  shadowRadius: true,

  /* legacy android transform properties */
  scaleX: true,
  scaleY: true,
  translateX: true,
  translateY: true
};

const TRANSFORM_WHITELIST = {
  translateX: true,
  translateY: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  rotate: true,
  rotateX: true,
  rotateY: true,
  rotateZ: true,
  perspective: true
};

const SUPPORTED_INTERPOLATION_PARAMS = {
  inputRange: true,
  outputRange: true,
  extrapolate: true,
  extrapolateRight: true,
  extrapolateLeft: true
};

function addWhitelistedStyleProp(prop: string): void {}

function addWhitelistedTransformProp(prop: string): void {}

function addWhitelistedInterpolationParam(param: string): void {}

function validateTransform(configs: Array<{
  type: "animated";
  property: string;
  nodeTag: number | null | undefined;

} | {
  type: "static";
  property: string;
  value: number | string;

}>): void {}

function validateStyles(styles: {
  [key: string]: number | null | undefined;
}): void {}

function validateInterpolation(config: InterpolationConfigType): void {}

function generateNewNodeTag(): number {
  return null as any;
}

function generateNewAnimationId(): number {
  return null as any;
}

function assertNativeAnimatedModule(): void {}

let _warnedMissingNativeAnimated = false;

function shouldUseNativeDriver(config: AnimationConfig | EventConfig): boolean {
  return null as any;
}

function transformDataType(value: number | string): number | string {
  return null as any;
}

export default {
  API,
  addWhitelistedStyleProp,
  addWhitelistedTransformProp,
  addWhitelistedInterpolationParam,
  validateStyles,
  validateTransform,
  validateInterpolation,
  generateNewNodeTag,
  generateNewAnimationId,
  assertNativeAnimatedModule,
  shouldUseNativeDriver,
  transformDataType,
  // $FlowExpectedError - unsafe getter lint suppresion
  get nativeEventEmitter(): NativeEventEmitter {
    if (!nativeEventEmitter) {
      nativeEventEmitter = new NativeEventEmitter(NativeAnimatedModule);
    }
    return nativeEventEmitter;
  }
};;
