yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/UnimplementedViews/UnimplementedNativeViewNativeComponent.js
'use strict';
import { $ReadOnly } from "utility-types";












import { WithDefault } from "../../Types/CodegenTypes";
import { ViewProps } from "../View/ViewPropTypes";

import codegenNativeComponent from "../../Utilities/codegenNativeComponent";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type NativeProps = $ReadOnly<ViewProps & {
  name?: WithDefault<string, "">;
}>;

// NOTE: This component is not implemented in paper
// Do not require this file in paper builds
export default (codegenNativeComponent<NativeProps>('UnimplementedNativeView') as HostComponent<NativeProps>);
Done in 0.50s.
