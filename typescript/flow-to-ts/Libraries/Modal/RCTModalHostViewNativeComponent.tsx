yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Modal/RCTModalHostViewNativeComponent.js
'use strict';
import { $ReadOnly } from "utility-types";












import codegenNativeComponent from "../Utilities/codegenNativeComponent";
import { HostComponent } from "../Renderer/shims/ReactNativeTypes";
import { WithDefault, DirectEventHandler, Int32 } from "../Types/CodegenTypes";

import { ViewProps } from "../Components/View/ViewPropTypes";

type OrientationChangeEvent = $ReadOnly<{
  orientation: "portrait" | "landscape";
}>;

type NativeProps = $ReadOnly<ViewProps & {
  /**
   * The `animationType` prop controls how the modal animates.
   *
   * See https://facebook.github.io/react-native/docs/modal.html#animationtype
   */
  animationType?: WithDefault<"none" | "slide" | "fade", "none">;

  /**
   * The `presentationStyle` prop controls how the modal appears.
   *
   * See https://facebook.github.io/react-native/docs/modal.html#presentationstyle
   */
  presentationStyle?: WithDefault<"fullScreen" | "pageSheet" | "formSheet" | "overFullScreen", "fullScreen">;

  /**
   * The `transparent` prop determines whether your modal will fill the
   * entire view.
   *
   * See https://facebook.github.io/react-native/docs/modal.html#transparent
   */
  transparent?: WithDefault<boolean, false>;

  /**
   * The `statusBarTranslucent` prop determines whether your modal should go under
   * the system statusbar.
   *
   * See https://facebook.github.io/react-native/docs/modal.html#statusBarTranslucent
   */
  statusBarTranslucent?: WithDefault<boolean, false>;

  /**
   * The `hardwareAccelerated` prop controls whether to force hardware
   * acceleration for the underlying window.
   *
   * See https://facebook.github.io/react-native/docs/modal.html#hardwareaccelerated
   */
  hardwareAccelerated?: WithDefault<boolean, false>;

  /**
   * The `onRequestClose` callback is called when the user taps the hardware
   * back button on Android or the menu button on Apple TV.
   *
   * This is required on Apple TV and Android.
   *
   * See https://facebook.github.io/react-native/docs/modal.html#onrequestclose
   */
  onRequestClose?: DirectEventHandler<null> | null | undefined;

  /**
   * The `onShow` prop allows passing a function that will be called once the
   * modal has been shown.
   *
   * See https://facebook.github.io/react-native/docs/modal.html#onshow
   */
  onShow?: DirectEventHandler<null> | null | undefined;

  /**
   * Deprecated. Use the `animationType` prop instead.
   */
  animated?: WithDefault<boolean, false>;

  /**
   * The `supportedOrientations` prop allows the modal to be rotated to any of the specified orientations.
   *
   * See https://facebook.github.io/react-native/docs/modal.html#supportedorientations
   */
  supportedOrientations?: WithDefault<ReadonlyArray<"portrait" | "portrait-upside-down" | "landscape" | "landscape-left" | "landscape-right">, "portrait">;

  /**
   * The `onOrientationChange` callback is called when the orientation changes while the modal is being displayed.
   *
   * See https://facebook.github.io/react-native/docs/modal.html#onorientationchange
   */
  onOrientationChange?: DirectEventHandler<OrientationChangeEvent> | null | undefined;

  /**
   * The `identifier` is the unique number for identifying Modal components.
   */
  identifier?: WithDefault<Int32, 0>;
}>;

export default (codegenNativeComponent<NativeProps>('ModalHostView', {
  interfaceOnly: true,
  paperComponentName: 'RCTModalHostView'
}) as HostComponent<NativeProps>);
Done in 0.50s.
