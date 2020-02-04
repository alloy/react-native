yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/RefreshControl/AndroidSwipeRefreshLayoutNativeComponent.js
'use strict';
import { $ReadOnly } from "utility-types";












import * as React from "react";

import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";
import codegenNativeComponent from "../../Utilities/codegenNativeComponent";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";

import { DirectEventHandler, Float, Int32, WithDefault } from "../../Types/CodegenTypes";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";

type NativeProps = $ReadOnly<ViewProps & {
  /**
   * Whether the pull to refresh functionality is enabled.
   */
  enabled?: WithDefault<boolean, true>;

  /**
   * The colors (at least one) that will be used to draw the refresh indicator.
   */
  colors?: ReadonlyArray<ColorValue> | null | undefined;

  /**
   * The background color of the refresh indicator.
   */
  progressBackgroundColor?: ColorValue | null | undefined;

  /**
   * Size of the refresh indicator, see RefreshControl.SIZE.
   *
   * This type isn't currently accurate. It really is specific numbers
   * hard coded in the Android platform.
   *
   * Also, 1 isn't actually a safe default. We are able to set this here
   * because native code isn't currently consuming the generated artifact.
   * This will end up being
   * size?: WithDefault<'default' | 'large', 'default'>,
   */
  size?: WithDefault<Int32, 1>;

  /**
   * Progress view top offset
   */
  progressViewOffset?: WithDefault<Float, 0>;

  /**
   * Called when the view starts refreshing.
   */
  onRefresh?: DirectEventHandler<null> | null | undefined;

  /**
   * Whether the view should be indicating an active refresh.
   */
  refreshing: boolean;
}>;

type NativeType = HostComponent<NativeProps>;

interface NativeCommands {
  readonly setNativeRefreshing: (viewRef: React.ElementRef<NativeType>, value: boolean) => void;
}

export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['setNativeRefreshing']
});

export default (codegenNativeComponent<NativeProps>('AndroidSwipeRefreshLayout') as NativeType);
Done in 0.49s.
