import { $ReadOnly } from "utility-types";
import { HostComponent } from "../../Libraries/Renderer/shims/ReactNativeTypes";
declare type Options = $ReadOnly<{
    interfaceOnly?: boolean;
    paperComponentName?: string;
    paperComponentNameDeprecated?: string;
    excludedPlatform?: "iOS" | "android";
}>;
export declare type NativeComponentType<T> = HostComponent<T>;
declare function codegenNativeComponent<Props>(componentName: string, options?: Options): NativeComponentType<Props>;
export default codegenNativeComponent;
