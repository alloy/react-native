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
