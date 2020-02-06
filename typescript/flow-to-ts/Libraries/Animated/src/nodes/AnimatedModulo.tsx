'use strict';;
import AnimatedInterpolation from './AnimatedInterpolation';
import AnimatedNode from './AnimatedNode';
import AnimatedWithChildren from './AnimatedWithChildren';

import { InterpolationConfigType } from "./AnimatedInterpolation";

class AnimatedModulo extends AnimatedWithChildren {

  _a: AnimatedNode;
  _modulus: number;

  constructor(a: AnimatedNode, modulus: number) {
    super();
    this._a = a;
    this._modulus = modulus;
  }

  __makeNative() {
    this._a.__makeNative();
    super.__makeNative();
  }

  __getValue(): number {
    return (this._a.__getValue() % this._modulus + this._modulus) % this._modulus;
  }

  interpolate(config: InterpolationConfigType): AnimatedInterpolation {
    return new AnimatedInterpolation(this, config);
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
      type: 'modulus',
      input: this._a.__getNativeTag(),
      modulus: this._modulus
    };
  }
}

export default AnimatedModulo;
