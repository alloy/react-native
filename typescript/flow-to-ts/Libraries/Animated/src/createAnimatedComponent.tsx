'use strict';;
import _Import0 from './AnimatedEvent';
import AnimatedProps from './nodes/AnimatedProps';
import React from 'react';
import invariant from 'invariant';
import setAndForwardRef from '../../Utilities/setAndForwardRef';












const {
  AnimatedEvent
} = _Import0;

export type AnimatedComponentType<Props extends {
  readonly [key: string]: unknown;
}, Instance> = React.AbstractComponent<$ObjMap<Props, (() => any)>, Instance>;

function createAnimatedComponent<Props extends {
  readonly [key: string]: unknown;
}, Instance>(Component: React.AbstractComponent<Props, Instance>): AnimatedComponentType<Props, Instance> {
  return null as any;
}

export default createAnimatedComponent;;
