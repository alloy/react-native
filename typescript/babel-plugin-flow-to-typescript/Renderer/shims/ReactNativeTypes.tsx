/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */
import React, { ElementRef, AbstractComponent } from 'react';
type Class<T> = new (...args: any) => T;
export type MeasureOnSuccessCallback = (x: number, y: number, width: number, height: number, pageX: number, pageY: number) => void;
export type MeasureInWindowOnSuccessCallback = (x: number, y: number, width: number, height: number) => void;
export type MeasureLayoutOnSuccessCallback = (left: number, top: number, width: number, height: number) => void;
type AttributeType = true | Readonly<{
  diff?: <T>(arg1: T, arg2: T) => boolean;
  process?: (arg1: any) => any;
}>;
export type AttributeConfiguration<TProps = string, TStyleProps = string> = Readonly<{
  style: Readonly<{
    [propName: TStyleProps]: AttributeType;
  }>;
  [propName: TProps]: AttributeType;
}>;
export type ReactNativeBaseComponentViewConfig<TProps = string, TStyleProps = string> = Readonly<{
  baseModuleName?: string;
  bubblingEventTypes?: Readonly<{
    [eventName: string]: Readonly<{
      phasedRegistrationNames: Readonly<{
        captured: string;
        bubbled: string;
      }>;
    }>;
  }>;
  Commands?: Readonly<{
    [commandName: string]: number;
  }>;
  directEventTypes?: Readonly<{
    [eventName: string]: Readonly<{
      registrationName: string;
    }>;
  }>;
  NativeProps?: Readonly<{
    [propName: string]: string;
  }>;
  uiViewClassName: string;
  validAttributes: AttributeConfiguration<TProps, TStyleProps>;
}>;
export type ViewConfigGetter = () => ReactNativeBaseComponentViewConfig;
/**
 * Class only exists for its Flow type.
 */

class ReactNativeComponent<Props> extends React.Component<Props> {
  blur(): void {}

  focus(): void {}

  measure(callback: MeasureOnSuccessCallback): void {}

  measureInWindow(callback: MeasureInWindowOnSuccessCallback): void {}

  measureLayout(relativeToNativeNode: number | ElementRef<HostComponent<unknown>>, onSuccess: MeasureLayoutOnSuccessCallback, onFail?: () => void): void {}

  setNativeProps(nativeProps: object): void {}

} // This type is only used for FlowTests. It shouldn't be imported directly


export type _InternalReactNativeComponentClass<Props> = Class<ReactNativeComponent<Props>>;
/**
 * This type keeps ReactNativeFiberHostComponent and NativeMethodsMixin in sync.
 * It can also provide types for ReactNative applications that use NMM or refs.
 */

export type NativeMethods = {
  blur(): void;
  focus(): void;
  measure(callback: MeasureOnSuccessCallback): void;
  measureInWindow(callback: MeasureInWindowOnSuccessCallback): void;
  measureLayout(relativeToNativeNode: number | ElementRef<HostComponent<unknown>>, onSuccess: MeasureLayoutOnSuccessCallback, onFail?: () => void): void;
  setNativeProps(nativeProps: object): void;
};
export type NativeMethodsMixinType = NativeMethods;
export type HostComponent<T> = AbstractComponent<T, Readonly<NativeMethods>>;
type SecretInternalsType = {
  NativeMethodsMixin: NativeMethodsMixinType;
  computeComponentStackForErrorReporting(tag: number): string;
};
type SecretInternalsFabricType = {
  NativeMethodsMixin: NativeMethodsMixinType;
};
/**
 * Flat ReactNative renderer bundles are too big for Flow to parse efficiently.
 * Provide minimal Flow typing for the high-level RN API and call it a day.
 */

export type ReactNativeType = {
  NativeComponent: typeof ReactNativeComponent;
  findHostInstance_DEPRECATED(componentOrHandle: any): ElementRef<HostComponent<unknown>> | undefined | null;
  findNodeHandle(componentOrHandle: any): number | undefined | null;
  dispatchCommand(handle: any, command: string, args: Array<any>): void;
  render(element: React$Element<any>, containerTag: any, callback?: Function | null): any;
  unmountComponentAtNode(containerTag: number): any;
  unmountComponentAtNodeAndRemoveContainer(containerTag: number): any;
  // TODO (bvaughn) Add types
  unstable_batchedUpdates: any;
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: SecretInternalsType;
};
export type ReactFabricType = {
  NativeComponent: typeof ReactNativeComponent;
  findHostInstance_DEPRECATED(componentOrHandle: any): HostComponent<unknown> | undefined | null;
  findNodeHandle(componentOrHandle: any): number | undefined | null;
  dispatchCommand(handle: any, command: string, args: Array<any>): void;
  render(element: React$Element<any>, containerTag: any, callback?: Function | null): any;
  unmountComponentAtNode(containerTag: number): any;
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: SecretInternalsFabricType;
};
export type ReactNativeEventTarget = {
  node: object;
  canonical: {
    _nativeTag: number;
    viewConfig: ReactNativeBaseComponentViewConfig;
    currentProps: object;
    _internalInstanceHandle: object;
  };
};
export type ReactFaricEventTouch = {
  identifier: number;
  locationX: number;
  locationY: number;
  pageX: number;
  pageY: number;
  screenX: number;
  screenY: number;
  target: number;
  timestamp: number;
  force: number;
};
export type ReactFaricEvent = {
  touches: Array<ReactFaricEventTouch>;
  changedTouches: Array<ReactFaricEventTouch>;
  targetTouches: Array<ReactFaricEventTouch>;
  target: number;
};