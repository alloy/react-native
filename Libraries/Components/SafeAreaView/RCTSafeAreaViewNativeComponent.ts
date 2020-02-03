'use strict';
import { $ReadOnly } from "utility-types";












import { ViewProps } from "../View/ViewPropTypes";
import { WithDefault } from "../../Types/CodegenTypes";

import codegenNativeComponent from "../../Utilities/codegenNativeComponent";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type NativeProps = $ReadOnly<ViewProps & {
  // Props
  emulateUnlessSupported?: WithDefault<boolean, false>;
}>;

export default (codegenNativeComponent<NativeProps>('SafeAreaView', {
  paperComponentName: 'RCTSafeAreaView',
  interfaceOnly: true
}) as HostComponent<NativeProps>);