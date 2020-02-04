yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/SafeAreaView/RCTSafeAreaViewNativeComponent.js
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
Done in 0.50s.
