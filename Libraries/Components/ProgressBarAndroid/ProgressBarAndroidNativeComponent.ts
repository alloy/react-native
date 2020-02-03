'use strict';
import { $ReadOnly } from "utility-types";












import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
import { Double, WithDefault } from "../../Types/CodegenTypes";

import codegenNativeComponent from "../../Utilities/codegenNativeComponent";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type NativeProps = $ReadOnly<ViewProps & {
  //Props
  styleAttr?: string;
  typeAttr?: string;
  indeterminate: boolean;
  progress?: WithDefault<Double, 0>;
  animating?: WithDefault<boolean, true>;
  color?: ColorValue | null | undefined;
  testID?: WithDefault<string, "">;
}>;

export default (codegenNativeComponent<NativeProps>('AndroidProgressBar') as HostComponent<NativeProps>);