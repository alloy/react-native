import { HostComponent } from '../../Libraries/Renderer/shims/ReactNativeTypes';
declare type Options = Readonly<{
    interfaceOnly?: boolean;
    paperComponentName?: string;
    paperComponentNameDeprecated?: string;
    excludedPlatform?: "iOS" | "android";
}>;
export declare type NativeComponentType<T> = HostComponent<T>;
declare function codegenNativeComponent<Props>(componentName: string, options?: Options): NativeComponentType<Props>;
export default codegenNativeComponent;
