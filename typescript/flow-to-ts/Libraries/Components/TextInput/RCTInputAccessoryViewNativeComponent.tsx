yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/TextInput/RCTInputAccessoryViewNativeComponent.js
'use strict';
import { $ReadOnly } from "utility-types";












import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";

import codegenNativeComponent from "../../Utilities/codegenNativeComponent";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type NativeProps = $ReadOnly<ViewProps & {
  backgroundColor?: ColorValue | null | undefined;
}>;

export default (codegenNativeComponent<NativeProps>('RCTInputAccessoryView') as HostComponent<NativeProps>);
Done in 0.49s.
