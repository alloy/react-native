'use strict';;
import _Import0 from './AnimatedEvent';
import AnimatedImplementation from './AnimatedImplementation';
import AnimatedInterpolation from './nodes/AnimatedInterpolation';
import AnimatedNode from './nodes/AnimatedNode';
import AnimatedProps from './nodes/AnimatedProps';
import AnimatedValue from './nodes/AnimatedValue';
import AnimatedValueXY from './nodes/AnimatedValueXY';
import createAnimatedComponent from './createAnimatedComponent';












const {
  AnimatedEvent,
  attachNativeEvent
} = _Import0;

import { EndCallback } from "./animations/Animation";
import { TimingAnimationConfig } from "./animations/TimingAnimation";
import { DecayAnimationConfig } from "./animations/DecayAnimation";
import { SpringAnimationConfig } from "./animations/SpringAnimation";
import { Mapping, EventConfig } from "./AnimatedEvent";

/**
 * Animations are a source of flakiness in snapshot testing. This mock replaces
 * animation functions from AnimatedImplementation with empty animations for
 * predictability in tests.
 */
export type CompositeAnimation = {
  start: ((callback?: EndCallback | null | undefined) => void);
  stop: (() => void);
  reset: (() => void);
  _startNativeLoop: ((iterations?: number) => void);
  _isUsingNativeDriver: (() => boolean);

};

const emptyAnimation = {
  start: () => {},
  stop: () => {},
  reset: () => {},
  _startNativeLoop: () => {},
  _isUsingNativeDriver: () => {
    return false;
  }
};

const spring = function (value: AnimatedValue | AnimatedValueXY, config: SpringAnimationConfig): CompositeAnimation {
  const anyValue: any = value;
  return {
    ...emptyAnimation,
    start: (callback?: EndCallback | null | undefined): void => {
      anyValue.setValue(config.toValue);
      callback && callback({ finished: true });
    }
  };
};

const timing = function (value: AnimatedValue | AnimatedValueXY, config: TimingAnimationConfig): CompositeAnimation {
  const anyValue: any = value;
  return {
    ...emptyAnimation,
    start: (callback?: EndCallback | null | undefined): void => {
      anyValue.setValue(config.toValue);
      callback && callback({ finished: true });
    }
  };
};

const decay = function (value: AnimatedValue | AnimatedValueXY, config: DecayAnimationConfig): CompositeAnimation {
  return emptyAnimation;
};

const sequence = function (animations: Array<CompositeAnimation>): CompositeAnimation {
  return emptyAnimation;
};

type ParallelConfig = {stopTogether?: boolean;};
const parallel = function (animations: Array<CompositeAnimation>, config?: ParallelConfig | null | undefined): CompositeAnimation {
  return emptyAnimation;
};

const delay = function (time: number): CompositeAnimation {
  return emptyAnimation;
};

const stagger = function (time: number, animations: Array<CompositeAnimation>): CompositeAnimation {
  return emptyAnimation;
};

type LoopAnimationConfig = {
  iterations: number;
  resetBeforeIteration?: boolean;

};

const loop = function (animation: CompositeAnimation, {
  iterations = -1
}: LoopAnimationConfig = {}): CompositeAnimation {
  return emptyAnimation;
};

const event = function (argMapping: Array<Mapping | null | undefined>, config: EventConfig): any {
  return null;
};

export default {
  Value: AnimatedValue,
  ValueXY: AnimatedValueXY,
  Interpolation: AnimatedInterpolation,
  Node: AnimatedNode,
  decay,
  timing,
  spring,
  add: AnimatedImplementation.add,
  subtract: AnimatedImplementation.subtract,
  divide: AnimatedImplementation.divide,
  multiply: AnimatedImplementation.multiply,
  modulo: AnimatedImplementation.modulo,
  diffClamp: AnimatedImplementation.diffClamp,
  delay,
  sequence,
  parallel,
  stagger,
  loop,
  event,
  createAnimatedComponent,
  attachNativeEvent,
  forkEvent: AnimatedImplementation.forkEvent,
  unforkEvent: AnimatedImplementation.unforkEvent,
  Event: AnimatedEvent,
  __PropsOnlyForTests: AnimatedProps
};;
