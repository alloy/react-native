yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/ProgressViewIOS/RCTProgressViewNativeComponent.js
'use strict';
import { $ReadOnly } from "utility-types";












import { Float, WithDefault } from "../../Types/CodegenTypes";
import { ImageSource } from "../../Image/ImageSource";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";

import codegenNativeComponent from "../../Utilities/codegenNativeComponent";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type NativeProps = $ReadOnly<ViewProps & {
  // Props
  progressViewStyle?: WithDefault<"default" | "bar", "default">;
  progress?: WithDefault<Float, 0>;
  progressTintColor?: ColorValue | null | undefined;
  trackTintColor?: ColorValue | null | undefined;
  progressImage?: ImageSource | null | undefined;
  trackImage?: ImageSource | null | undefined;
}>;

export default (codegenNativeComponent<NativeProps>('RCTProgressView') as HostComponent<NativeProps>);
Done in 0.56s.
