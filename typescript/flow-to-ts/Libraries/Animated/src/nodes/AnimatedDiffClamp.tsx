yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Animated/src/nodes/AnimatedDiffClamp.js
'use strict';












const AnimatedInterpolation = require('./AnimatedInterpolation');
const AnimatedNode = require('./AnimatedNode');
const AnimatedWithChildren = require('./AnimatedWithChildren');

import { InterpolationConfigType } from "./AnimatedInterpolation";

class AnimatedDiffClamp extends AnimatedWithChildren {

  _a: AnimatedNode;
  _min: number;
  _max: number;
  _value: number;
  _lastValue: number;

  constructor(a: AnimatedNode, min: number, max: number) {
    super();

    this._a = a;
    this._min = min;
    this._max = max;
    this._value = this._lastValue = this._a.__getValue();
  }

  __makeNative() {
    this._a.__makeNative();
    super.__makeNative();
  }

  interpolate(config: InterpolationConfigType): AnimatedInterpolation {
    return new AnimatedInterpolation(this, config);
  }

  __getValue(): number {
    const value = this._a.__getValue();
    const diff = value - this._lastValue;
    this._lastValue = value;
    this._value = Math.min(Math.max(this._value + diff, this._min), this._max);
    return this._value;
  }

  __attach(): void {
    this._a.__addChild(this);
  }

  __detach(): void {
    this._a.__removeChild(this);
    super.__detach();
  }

  __getNativeConfig(): any {
    return {
      type: 'diffclamp',
      input: this._a.__getNativeTag(),
      min: this._min,
      max: this._max
    };
  }
}

module.exports = AnimatedDiffClamp;
Done in 0.52s.
