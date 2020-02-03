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
  let componentNameInUse = options && options.paperComponentName ? options.paperComponentName : componentName;

  if (options != null && options.paperComponentNameDeprecated != null) {
    if (UIManager.getViewManagerConfig(componentName)) {
      componentNameInUse = componentName;
    } else if (options.paperComponentNameDeprecated != null && UIManager.getViewManagerConfig(options.paperComponentNameDeprecated)) {
      componentNameInUse = options.paperComponentNameDeprecated;
    } else {
      throw new Error(`Failed to find native component for either ${componentName} or ${options.paperComponentNameDeprecated || '(unknown)'}`);
    }
  }

  // If this function is run at runtime then that means the view configs were not
  // generated with the view config babel plugin, so we need to require the native component.
  //
  // This will be useful during migration, but eventually this will error.
  return (requireNativeComponent<Props>(componentNameInUse) as HostComponent<Props>);
}

export default codegenNativeComponent;