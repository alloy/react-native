/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type ReactNode = React$Element<any> | ReactPortal | ReactText | ReactFragment | ReactProvider<any> | ReactConsumer<any>;

export type ReactEmpty = null | void | boolean;

export type ReactFragment = ReactEmpty | Iterable<React$Node>;

export type ReactNodeList = ReactEmpty | React$Node;

export type ReactText = string | number;

export type ReactProvider<T> = {
  $$typeof: Symbol | number;
  type: ReactProviderType<T>;
  key: null | string;
  ref: null;
  props: {
    value: T;
    children?: ReactNodeList;

  };

};

export type ReactProviderType<T> = {
  $$typeof: Symbol | number;
  _context: ReactContext<T>;

};

export type ReactConsumer<T> = {
  $$typeof: Symbol | number;
  type: ReactContext<T>;
  key: null | string;
  ref: null;
  props: {
    children: ((value: T) => ReactNodeList);
    unstable_observedBits?: number;

  };

};

export type ReactContext<T> = {
  $$typeof: Symbol | number;
  Consumer: ReactContext<T>;
  Provider: ReactProviderType<T>;
  _calculateChangedBits: ((a: T, b: T) => number) | null;
  _currentValue: T;
  _currentValue2: T;
  _threadCount: number;
  // DEV only
  _currentRenderer?: any | null;
  _currentRenderer2?: any | null;

};

export type ReactPortal = {
  $$typeof: Symbol | number;
  key: null | string;
  containerInfo: any;
  children: ReactNodeList;
  // TODO: figure out the API for cross-renderer implementation.
  implementation: any;

};

export type RefObject = {
  current: any;
};

export type ReactEventResponderInstance<E, C> = {
  fiber: any;
  props: any;
  responder: ReactEventResponder<E, C>;
  rootEventTypes: null | Set<string>;
  state: any;
};

export type ReactEventResponderListener<E, C> = {
  props: any;
  responder: ReactEventResponder<E, C>;
};

export type ReactEventResponder<E, C> = {
  $$typeof: Symbol | number;
  displayName: string;
  targetEventTypes: null | Array<string>;
  targetPortalPropagation: boolean;
  rootEventTypes: null | Array<string>;
  getInitialState: null | ((props: any) => any);
  onEvent: null | ((event: E, context: C, props: any, state: any) => void);
  onRootEvent: null | ((event: E, context: C, props: any, state: any) => void);
  onMount: null | ((context: C, props: any, state: any) => void);
  onUnmount: null | ((context: C, props: any, state: any) => void);

};

export type EventPriority = 0 | 1 | 2;

export const DiscreteEvent: EventPriority = 0;
export const UserBlockingEvent: EventPriority = 1;
export const ContinuousEvent: EventPriority = 2;

export type ReactFundamentalComponentInstance<C, H> = {
  currentFiber: unknown;
  instance: unknown;
  prevProps: null | any;
  props: any;
  impl: ReactFundamentalImpl<C, H>;
  state: any;
};

export type ReactFundamentalImpl<C, H> = {
  displayName: string;
  reconcileChildren: boolean;
  getInitialState?: ((props: any) => any);
  getInstance: ((context: C, props: any, state: any) => H);
  getServerSideString?: ((context: C, props: any) => string);
  getServerSideStringClose?: ((context: C, props: any) => string);
  onMount: ((context: C, instance: unknown, props: any, state: any) => void);
  shouldUpdate?: ((context: C, prevProps: null | any, nextProps: any, state: any) => boolean);
  onUpdate?: ((context: C, instance: unknown, prevProps: null | any, nextProps: any, state: any) => void);
  onUnmount?: ((context: C, instance: unknown, props: any, state: any) => void);
  onHydrate?: ((context: C, props: any, state: any) => boolean);
  onFocus?: ((context: C, props: any, state: any) => boolean);

};

export type ReactFundamentalComponent<C, H> = {
  $$typeof: Symbol | number;
  impl: ReactFundamentalImpl<C, H>;
};

export type ReactScope = {
  $$typeof: Symbol | number;
};

export type ReactScopeMethods = {
  getChildren(): null | Array<ReactScopeMethods>;
  getChildrenFromRoot(): null | Array<ReactScopeMethods>;
  getParent(): null | ReactScopeMethods;
  getProps(): any;
  queryAllNodes(arg0: ((type: string | any, props: any, instance: any) => boolean)): null | Array<any>;
  queryFirstNode(arg0: ((type: string | any, props: any, instance: any) => boolean)): null | any;
  containsNode(arg0: any): boolean;
};

export type ReactScopeInstance = {
  fiber: any;
  methods: null | ReactScopeMethods;
};
