'use strict';












const createReactNativeComponentClass = require('../Renderer/shims/createReactNativeComponentClass');
const getNativeComponentAttributes = require('./getNativeComponentAttributes');

import { HostComponent } from "../Renderer/shims/ReactNativeTypes";

/**
 * Creates values that can be used like React components which represent native
 * view managers. You should create JavaScript modules that wrap these values so
 * that the results are memoized. Example:
 *
 *   const View = requireNativeComponent('RCTView');
 *
 */
const requireNativeComponent = <T>(uiViewClassName: string): HostComponent<T> => ((createReactNativeComponentClass(uiViewClassName, () => getNativeComponentAttributes(uiViewClassName)) as any) as HostComponent<T>);

module.exports = requireNativeComponent;