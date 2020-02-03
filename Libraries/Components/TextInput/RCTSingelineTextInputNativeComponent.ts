'use strict';












import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import requireNativeComponent from "../../ReactNative/requireNativeComponent";
import codegenNativeCommands from "../../Utilities/codegenNativeCommands";
import { Int32 } from "../../Types/CodegenTypes";
import * as React from "react";
import RCTSinglelineTextInputViewConfig from "./RCTSinglelineTextInputViewConfig";
const ReactNativeViewConfigRegistry = require('../../Renderer/shims/ReactNativeViewConfigRegistry');

type NativeType = HostComponent<unknown>;

interface NativeCommands {
  readonly focus: (viewRef: React.ElementRef<NativeType>) => void;
  readonly blur: (viewRef: React.ElementRef<NativeType>) => void;
  readonly setMostRecentEventCount: (viewRef: React.ElementRef<NativeType>, eventCount: Int32) => void;
  readonly setTextAndSelection: (viewRef: React.ElementRef<NativeType>, mostRecentEventCount: Int32, value: string | null | undefined, // in theory this is nullable
  start: Int32, end: Int32) => void;
}

export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['focus', 'blur', 'setMostRecentEventCount', 'setTextAndSelection']
});

let SinglelineTextInputNativeComponent;
if (global.RN$Bridgeless) {
  ReactNativeViewConfigRegistry.register('RCTSinglelineTextInputView', () => {
    return RCTSinglelineTextInputViewConfig;
  });
  SinglelineTextInputNativeComponent = 'RCTSinglelineTextInputView';
} else {
  SinglelineTextInputNativeComponent = requireNativeComponent<unknown>('RCTSinglelineTextInputView');
}

// flowlint-next-line unclear-type:off
export default ((SinglelineTextInputNativeComponent as any) as HostComponent<unknown>);