'use strict';
import { $ReadOnly } from "utility-types";














import requireNativeComponent from "../../Libraries/ReactNative/requireNativeComponent";
import { HostComponent } from "../../Libraries/Renderer/shims/ReactNativeTypes";
import UIManager from "../ReactNative/UIManager";

// TODO: import from CodegenSchema once workspaces are enabled
type Options = $ReadOnly<{
  interfaceOnly?: boolean;
  paperComponentName?: string;
  paperComponentNameDeprecated?: string;
  excludedPlatform?: "iOS" | "android";
}>;

export type NativeComponentType<T> = HostComponent<T>;

function codegenNativeComponent<Props>(componentName: string, options?: Options): NativeComponentType<Props> {
  return null as any;
}

export default codegenNativeComponent;
