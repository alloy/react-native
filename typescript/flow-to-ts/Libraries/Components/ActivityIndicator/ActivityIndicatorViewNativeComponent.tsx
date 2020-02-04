yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/ActivityIndicator/ActivityIndicatorViewNativeComponent.js
'use strict';
import { $ReadOnly } from "utility-types";












import { WithDefault } from "../../Types/CodegenTypes";

import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";

import codegenNativeComponent from "../../Utilities/codegenNativeComponent";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

type NativeProps = $ReadOnly<ViewProps & {
  /**
   * Whether the indicator should hide when not animating (true by default).
   *
   * See http://facebook.github.io/react-native/docs/activityindicator.html#hideswhenstopped
   */
  hidesWhenStopped?: WithDefault<boolean, false>;

  /**
   * Whether to show the indicator (true, the default) or hide it (false).
   *
   * See http://facebook.github.io/react-native/docs/activityindicator.html#animating
   */
  animating?: WithDefault<boolean, false>;

  /**
   * The foreground color of the spinner (default is gray).
   *
   * See http://facebook.github.io/react-native/docs/activityindicator.html#color
   */
  color?: ColorValue | null | undefined;

  /**
   * Size of the indicator (default is 'small').
   * Passing a number to the size prop is only supported on Android.
   *
   * See http://facebook.github.io/react-native/docs/activityindicator.html#size
   */
  size?: WithDefault<"small" | "large", "small">;
}>;

export default (codegenNativeComponent<NativeProps>('ActivityIndicatorView', {
  paperComponentName: 'RCTActivityIndicatorView'
}) as HostComponent<NativeProps>);
Done in 0.49s.
