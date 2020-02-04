yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/SegmentedControlIOS/RCTSegmentedControlNativeComponent.js
'use strict';
import { $ReadOnly } from "utility-types";












import codegenNativeComponent from "../../Utilities/codegenNativeComponent";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
import { BubblingEventHandler, WithDefault, Int32 } from "../../Types/CodegenTypes";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";

export type OnChangeEvent = $ReadOnly<{
  value: Int32;
  selectedSegmentIndex: Int32;
}>;

type NativeProps = $ReadOnly<ViewProps & {
  // Props
  values?: ReadonlyArray<string>;
  selectedIndex?: WithDefault<Int32, 0>;
  enabled?: WithDefault<boolean, true>;
  tintColor?: ColorValue | null | undefined;
  textColor?: ColorValue | null | undefined;
  backgroundColor?: ColorValue | null | undefined;
  momentary?: WithDefault<boolean, false>;
  // Events
  onChange?: BubblingEventHandler<OnChangeEvent> | null | undefined;
}>;

export default (codegenNativeComponent<NativeProps>('RCTSegmentedControl') as HostComponent<NativeProps>);
Done in 0.47s.
