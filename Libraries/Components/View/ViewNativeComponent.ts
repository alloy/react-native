'use strict';
import { $ReadOnly } from "utility-types";












const Platform = require('../../Utilities/Platform');
const ReactNativeViewViewConfigAndroid = require('./ReactNativeViewViewConfigAndroid');

const registerGeneratedViewConfig = require('../../Utilities/registerGeneratedViewConfig');
const requireNativeComponent = require('../../ReactNative/requireNativeComponent');

import * as React from "react";

import codegenNativeCommands from "../../Utilities/codegenNativeCommands";
import { ViewProps } from "./ViewPropTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

export type ViewNativeComponentType = HostComponent<ViewProps>;

let NativeViewComponent;
let viewConfig: {} | {
  bubblingEventTypes?: $ReadOnly<{
    [eventName: string]: $ReadOnly<{
      phasedRegistrationNames: $ReadOnly<{
        bubbled: string;
        captured: string;
      }>;
    }>;
  }>;
  directEventTypes?: $ReadOnly<{
    [eventName: string]: $ReadOnly<{registrationName: string;}>;
  }>;
  uiViewClassName: string;
  validAttributes?: {
    [propName: string]: true | $ReadOnly<{
      diff?: <T>(arg1: any, arg2: any) => boolean;
      process?: (arg1: any) => any;
    }>;
  };
};

// Only use the JS view config in DEV
if (__DEV__) {
  // On Android, View extends the base component with additional view-only props
  // On iOS, the base component is View
  if (Platform.OS === 'android') {
    viewConfig = ReactNativeViewViewConfigAndroid;
    registerGeneratedViewConfig('RCTView', ReactNativeViewViewConfigAndroid);
  } else {
    viewConfig = {};
    registerGeneratedViewConfig('RCTView', { uiViewClassName: 'RCTView' });
  }

  NativeViewComponent = 'RCTView';
} else {
  NativeViewComponent = requireNativeComponent('RCTView');
}

export const __INTERNAL_VIEW_CONFIG = viewConfig;

interface NativeCommands {
  readonly hotspotUpdate: (viewRef: React.ElementRef<HostComponent<unknown>>, x: number, y: number) => void;
  readonly setPressed: (viewRef: React.ElementRef<HostComponent<unknown>>, pressed: boolean) => void;
}

export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['hotspotUpdate', 'setPressed']
});

export default ((NativeViewComponent as any) as ViewNativeComponentType);