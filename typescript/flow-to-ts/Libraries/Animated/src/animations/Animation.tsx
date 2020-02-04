yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Animated/src/animations/Animation.js
'use strict';












const NativeAnimatedHelper = require('../NativeAnimatedHelper');

import AnimatedValue from "../nodes/AnimatedValue";

export type EndResult = {finished: boolean;};
export type EndCallback = (result: EndResult) => void;

export type AnimationConfig = {
  isInteraction?: boolean;
  useNativeDriver: boolean;
  onComplete?: EndCallback | null | undefined;
  iterations?: number;

};

// Important note: start() and stop() will only be called at most once.
// Once an animation has been stopped or finished its course, it will
// not be reused.
class Animation {

  __active: boolean;
  __isInteraction: boolean;
  __nativeId: number;
  __onEnd: EndCallback | null | undefined;
  __iterations: number;
  start(fromValue: number, onUpdate: (value: number) => void, onEnd: EndCallback | null | undefined, previousAnimation: Animation | null | undefined, animatedValue: AnimatedValue): void {}
  stop(): void {
    if (this.__nativeId) {
      NativeAnimatedHelper.API.stopAnimation(this.__nativeId);
    }
  }
  __getNativeAnimationConfig(): any {
    // Subclasses that have corresponding animation implementation done in native
    // should override this method
    throw new Error('This animation type cannot be offloaded to native');
  }
  // Helper function for subclasses to make sure onEnd is only called once.
  __debouncedOnEnd(result: EndResult): void {
    const onEnd = this.__onEnd;
    this.__onEnd = null;
    onEnd && onEnd(result);
  }
  __startNativeAnimation(animatedValue: AnimatedValue): void {
    NativeAnimatedHelper.API.enableQueue();
    animatedValue.__makeNative();
    NativeAnimatedHelper.API.disableQueue();
    this.__nativeId = NativeAnimatedHelper.generateNewAnimationId();
    NativeAnimatedHelper.API.startAnimatingNode(this.__nativeId, animatedValue.__getNativeTag(), this.__getNativeAnimationConfig(), this.__debouncedOnEnd.bind(this));
  }
}

module.exports = Animation;
Done in 0.50s.
